package com.project.devreview.controller;

import com.project.devreview.func.StringarrToList;
import com.project.devreview.model.dto.*;
import com.project.devreview.service.interf.*;
import lombok.AllArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
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
        Page<QuestionDTO> questionlist = questionService.readAllforPage(page-1);
        JSONArray questionArray = new JSONArray();
        for(QuestionDTO questionDTO:questionlist.getContent()){
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
//        return new ResponseEntity<>(questionArray.toList(),HttpStatus.OK);
        return new ResponseEntity<>(questionArray.toList(), HttpStatus.OK);
    }

    @GetMapping("/question/detail/normal/{ques_id}")
    @ResponseBody
    public ResponseEntity<Object> readQuestion(@PathVariable("ques_id") Long ques_id){
        Map<String,Object> map = new HashMap<>();
        JSONObject response = new JSONObject();

        QuestionDTO questionDTO = questionService.readQues(ques_id);

        List<AnswerDTO> answers = questionService.readAnswers(ques_id);
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
            ananswer.put("comments",jsoncomments);
            answerjsons.put(ananswer);
        }
        response.put("questionData",questioninfo);
        response.put("AnswerData",answerjsons);
        System.out.println(questioninfo);
        System.out.println(answerjsons);
        System.out.println(response);
        questionService.updateHit(ques_id);


        return new ResponseEntity<>(response.toMap(), HttpStatus.OK);
    }

    //api 연결 ok
    @PostMapping("/question/create")
    @ResponseBody
    public String writeQuestion(@RequestBody HashMap<String, Object> map){
        System.out.println(map);
        UserDTO finduser = userService.findUserByName(map.get("author").toString());
        QuestionDTO questionDTO = new QuestionDTO(
                map.get("title").toString(),map.get("content").toString(), LocalDateTime.now(),0,finduser
        );

        System.out.println("title : "+map.get("title"));
        System.out.println("content: "+map.get("content"));
        System.out.println("author: "+ map.get("author"));
        questionService.registerQues(questionDTO);
        String tags = map.get("tags").toString();
        List<String> tagarr = StringarrToList.StringArrayToList(tags);
        System.out.println(tagarr);
        QuestionDTO updatedQues = questionService.readByTitleAndUser(questionDTO);
        for(String tag:tagarr){
            if (tagService.isExist(tag)){
                quesTagService.registerQuesTag(updatedQues.getId(), tagService.readTagByName(tag).getId());
            }
            else {
//                Long id = tagService.setNewTag(tag);
                TagDTO tagDTO = new TagDTO(tag);
                tagService.setNewTag(tagDTO);
                quesTagService.registerQuesTag(updatedQues.getId(), tagService.readTagByName(tag).getId());
            }
        }
        return "success";
    }

    //api 연결 ok
    @GetMapping("/question/update/{ques_id}")
    @ResponseBody
    public ResponseEntity<Object> updateQuestion(@PathVariable("ques_id") Long id){
        QuestionDTO questionDTO = questionService.readQues(id);
        List<TagDTO> tagDTOS = quesTagService.findTagByQues(questionDTO);
//        QuestionDTO updated = questionService.updateQues(questionDTO);
        JSONObject questionjson = new JSONObject();
        questionjson.put("title",questionDTO.getTitle());
        questionjson.put("author",questionDTO.getUserDTO().getName());
        questionjson.put("date",questionDTO.getTime());
        questionjson.put("tags",quesTagService.findTagByQues(questionService.readQues(id)));
        questionjson.put("content",questionDTO.getContent());
        return new ResponseEntity<>(questionjson.toMap(),HttpStatus.OK);
    }

    //api 연결 ok
    @PutMapping("/question/update")
    @ResponseBody
    public String updateQuestion(@RequestBody Map<String, Object> map){
        QuestionDTO questionDTO = questionService.readQues(Long.valueOf(map.get("id").toString()));

        List<String> tags = StringarrToList.StringArrayToList(map.get("tags").toString());
        List<String> origintags = new ArrayList<>();
        for(TagDTO tagDTO:quesTagService.findTagByQues(questionDTO)){
            origintags.add(tagDTO.getName());
        }
        for(String tag:tags){
            if(!origintags.contains(tag)){
                if(tagService.isExist(tag)){
                    quesTagService.registerQuesTag(questionDTO.getId(),tagService.readTagByName(tag).getId());
                    origintags.remove(tag);
                }
                else{
                    TagDTO tagDTO = new TagDTO(tag);
                    tagService.setNewTag(tagDTO);
                    quesTagService.registerQuesTag(questionDTO.getId(),tagService.readTagByName(tag).getId());
                    origintags.remove(tag);
                }
            } else if (origintags.contains(tag)) {
                origintags.remove(tag);
            }
        }
        for(String tag:origintags){
            if(!tags.contains(tag)){
                Long quesId = questionDTO.getId();
                Long tagId = tagService.readTagByName(tag).getId();
                quesTagService.removeByQuesTag(quesId,tagId);
            }
        }
        questionDTO.setTitle(map.get("title").toString());
        questionDTO.setContent(map.get("content").toString());
        List<TagDTO> newQuestag = quesTagService.findTagByQues(questionDTO);
        System.out.println(newQuestag);
        questionService.updateQues(questionDTO);
        System.out.println(questionService.readQues(questionDTO.getId()));
        return "질문 수정 성공";
    }

    //테스트 전
    @DeleteMapping("/question/delete/{id}")
    @ResponseBody
    public String deleteQuestion(@PathVariable("id") Long id){
        List<Long> ids = answerService.deleteAnswer(id);
        for(Long ansid : ids){
            commentService.deleteByAnswer(ansid);
        }
        questionService.deleteQues(id);
        return "질문 삭제 성공";
    }

    //api 연결 ok
    @PostMapping("/answer/create")
    @ResponseBody
    public String registerAnswer(@RequestBody Map<String, Object> map){
        AnswerDTO answerDTO = new AnswerDTO(
                map.get("content").toString(),false, LocalDateTime.now().plusHours(9),
                userService.findUserByName(map.get("author").toString()),
                questionService.readQues(Long.valueOf(map.get("questionId").toString())));
        answerService.registerAnswer(answerDTO);
        return "답변 등록 확인";
    }

    //api 연결 ok
    @PutMapping("/answer/update")
    @ResponseBody
    public String updateAnswer(@RequestBody Map<String, Object> map){
        Long id = Long.valueOf(map.get("answerId").toString());
        AnswerDTO before = answerService.readById(id);
        before.setContent(map.get("content").toString());
        answerService.updateAnswer(before);
        AnswerDTO after = answerService.readById(id);
        System.out.println(before);
        System.out.println(after);
//        AnswerDTO answerDTO = new AnswerDTO(
//                map.get("content").toString(),false, (LocalDateTime) map.get("date"),
//                userService.findUserByName(map.get("author").toString()),
//                questionService.readQues((Long) map.get("questionId")));
//        answerService.updateAnswer(answerDTO);

        return "답변 수정 확인";
    }

    //api 연결 ok
    @PostMapping("/answer/comment/create")
    @ResponseBody
    public String registerComment(@RequestBody Map<String, Object> map){
        CommentDTO commentDTO = new CommentDTO(
                map.get("content").toString(),LocalDateTime.now().plusHours(9),
                answerService.readById(Long.valueOf(map.get("answerId").toString())),
                userService.findUserByName(map.get("author").toString())
        );
        commentService.registerComment(commentDTO);
        return "답변 댓글 등록";
    }
}
