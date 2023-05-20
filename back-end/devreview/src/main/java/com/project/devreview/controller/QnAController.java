package com.project.devreview.controller;

import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/questions")
public class QnAController {

    @Autowired
    QuestionService questionService;

    @PostMapping("/write")
    public QuestionDTO writeQuestion(){
        return null;
    }

}
