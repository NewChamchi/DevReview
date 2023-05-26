package com.project.devreview.controller;

import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.service.interf.AnswerService;
import com.project.devreview.service.interf.CommentService;
import com.project.devreview.service.interf.QuestionService;
import com.project.devreview.service.interf.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.HashMap;

@Controller
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

    @GetMapping("/question/detail/normal/:id")
    public void readQuestion(){

    }
    @PostMapping(path = "/question/create")
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

}
