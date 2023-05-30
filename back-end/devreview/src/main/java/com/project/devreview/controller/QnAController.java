package com.project.devreview.controller;

import com.project.devreview.model.dto.*;
import com.project.devreview.service.interf.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api")
public class QnAController {

    @Autowired
    private QuestionService questionService;
    @Autowired
    private AnswerService answerService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private UserService userService;
    @Autowired
    private QuesTagService quesTagService;
    @Autowired
    private TagService tagService;

    @GetMapping(value = {"/question/list/{search}&{page}", "/question/list"})
    @ResponseBody
    public ResponseEntity<Object> readQuestionList(
            @PathVariable(value = "search", required = false) String search,
            @PathVariable(value = "page", required = false) Integer page)
    {
        if(search==null) search = "";
        if(page==null) page=1;
        List<QuestionDTO> questionlist = questionService.readAll();
        JSONArray questionArray = new JSONArray();
        for(QuestionDTO questionDTO:questionlist){
            JSONObject questionjson = new JSONObject();
            questionjson.put("id",questionDTO.getId());
            questionjson.put("title",questionDTO.getTitle());
            questionjson.put("author",questionDTO.getUserDTO().getName());
            questionjson.put("date",questionDTO.getTime());
            questionjson.put("tags",
                    quesTagService.findTagByQues(questionService.readQues(questionDTO.getId()))
            );
            questionjson.put("views",questionDTO.getHit());
            questionArray.put(questionjson);
        }
        return new ResponseEntity<>(questionArray.toList(),HttpStatus.OK);
    }

    @GetMapping("/question/detail/normal/{ques_id}")
    @ResponseBody
    public ResponseEntity<Object> readQuestion(@PathVariable("ques_id") Long ques_id){
        Map<String,Object> map = new HashMap<>();
        JSONObject response = new JSONObject();

        QuestionDTO questionDTO = questionService.readQues(ques_id);

        List<AnswerDTO> answers = answerService.readAnswersByQues(questionDTO);
        JSONObject questionpage = new JSONObject();
        JSONArray answerjsons = new JSONArray();
        JSONArray commentArrs = new JSONArray();
        JSONObject questioninfo = new JSONObject();
        questioninfo.put("id",questionDTO.getId());
        questioninfo.put("title",questionDTO.getTitle());
        questioninfo.put("author",questionDTO.getUserDTO().getName());
        questioninfo.put("date",questionDTO.getTime());
        questioninfo.put("tags",quesTagService.findTagByQues(questionService.readQues(ques_id)));
        questioninfo.put("content",questionDTO.getContent());
        for(AnswerDTO answerDTO:answers){
            JSONObject ananswer = new JSONObject();
            ananswer.put("id",answerDTO.getId());
            ananswer.put("content",answerDTO.getContent());
            ananswer.put("author",answerDTO.getUserDTO().getName());
            ananswer.put("date",answerDTO.getDatetime());
            List<CommentDTO> comments = commentService.readCommentsByAnswer(answerDTO.getId());
            JSONArray jsoncomments = new JSONArray();
            for(CommentDTO commentDTO:comments){
                JSONObject acomment = new JSONObject();
                acomment.put("id",commentDTO.getId());
                acomment.put("content",commentDTO.getContent());
                acomment.put("author",commentDTO.getUserDTO().getName());
                acomment.put("date",commentDTO.getDatetime());
                jsoncomments.put(acomment);
            }
            answerjsons.put(ananswer);
        }
//        questioninfo.append("answerData",answerjsons);
        response.put("questionData",questioninfo);
        response.put("AnswerData",answerjsons);
        System.out.println(questioninfo);
        System.out.println(answerjsons);
        System.out.println(response);

//        response.getWriter().print(questioninfo);

        return new ResponseEntity<>(response.toMap(), HttpStatus.OK);
    }
    @PostMapping("/question/create")
    @ResponseBody
    public String writeQuestion(@RequestBody HashMap<String, Object> map){
        System.out.println(map);
        UserDTO finduser = userService.findUserByName(map.get("author").toString());
        QuestionDTO questionDTO = new QuestionDTO(
                map.get("title").toString(),map.get("content").toString(), (LocalDateTime) map.get("date"),0,finduser
        );
        System.out.println("title : "+map.get("title"));
        System.out.println("content: "+map.get("content"));
        System.out.println("author: "+ map.get("author"));
        questionService.registerQues(questionDTO);
        return "success";
    }

    @GetMapping("/question/update/{ques_id}")
    @ResponseBody
    public ResponseEntity<Object> updateQuestion(@PathVariable("ques_id") Long id){
        QuestionDTO questionDTO = questionService.readQues(id);
        JSONObject questionjson = new JSONObject();
        questionjson.put("title",questionDTO.getTitle());
        questionjson.put("author",questionDTO.getUserDTO().getName());
        questionjson.put("date",questionDTO.getTime());
        questionjson.put("tags",quesTagService.findTagByQues(questionService.readQues(id)));
        questionjson.put("content",questionDTO.getContent());
        return new ResponseEntity<>(questionjson.toMap(),HttpStatus.OK);
    }

    //태그 부분 수정할 것
    @PutMapping("/question/update")
    @ResponseBody
    public String updateQuestion(@RequestBody Map<String, Object> map){
        QuestionDTO questionDTO = questionService.readQues((Long) map.get("id"));
        questionDTO.setTitle(map.get("title").toString());
        questionDTO.setContent(map.get("content").toString());
        List<TagDTO> newQuestag = quesTagService.findTagByQues(questionDTO);
        questionService.updateQues(questionDTO);
        return "질문 수정 성공";
    }

    //연관 답변&댓글 삭제 추가할 것
    @DeleteMapping("/question/delete/{id}")
    @ResponseBody
    public String deleteQuestion(@PathVariable("id") Long id){
        questionService.deleteQues(id);
        return "질문 삭제 성공";
    }

    //테스트 전
    @PostMapping("/answer/create")
    @ResponseBody
    public String registerAnswer(@RequestBody Map<String, Object> map){
        AnswerDTO answerDTO = new AnswerDTO(
                map.get("content").toString(),false, (LocalDateTime) map.get("date"),
                userService.findUserByName(map.get("author").toString()),
                questionService.readQues((Long) map.get("questionId")));
        answerService.registerAnswer(answerDTO);
        return "답변 등록 확인";
    }

    //테스트 전
    @PutMapping("/answer/update")
    @ResponseBody
    public String updateAnswer(@RequestBody Map<String, Object> map){
        AnswerDTO answerDTO = new AnswerDTO(
                map.get("content").toString(),false, (LocalDateTime) map.get("date"),
                userService.findUserByName(map.get("author").toString()),
                questionService.readQues((Long) map.get("questionId")));
        answerService.updateAnswer(answerDTO);

        return "답변 수정 확인";
    }

    //테스트 전
    @PostMapping("/answer/comment/create")
    @ResponseBody
    public String registerComment(@RequestBody Map<String, Object> map){
        CommentDTO commentDTO = new CommentDTO(
                map.get("content").toString(),(LocalDateTime) map.get("date"),
                answerService.readById((Long) map.get("answerId")),
                userService.findUserByName(map.get("author").toString())
        );
        commentService.registerComment(commentDTO);
        return "답변 댓글 등록";
    }
}
