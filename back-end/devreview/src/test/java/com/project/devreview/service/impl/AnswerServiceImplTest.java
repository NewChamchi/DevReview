package com.project.devreview.service.impl;

import com.project.devreview.model.dto.AnswerDTO;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.service.interf.AnswerService;
import com.project.devreview.service.interf.QuestionService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AnswerServiceImplTest {
    @Autowired
    AnswerService answerService;
    @Autowired
    QuestionService questionService;

    @Test
    void registerAnswer() {
        QuestionDTO questionDTO = questionService.readQues(3L);
        answerService.registerAnswer(AnswerDTO.builder()
                .content("answerishere")
                .datetime(LocalDateTime.now())
                .userDTO(questionDTO.getUserDTO())
                .questionDTO(questionDTO).build());
    }

    @Test
    void readAnswersByQues() {
        QuestionDTO questionDTO = questionService.readQues(3L);
        List<AnswerDTO> answers = answerService.readAnswersByQues(questionDTO);
        System.out.println(answers);
    }

    @Test
    void updateAnswer() {
        AnswerDTO answerDTO = answerService.readById(1L);
        answerDTO.setContent("Hey, Kim!");
        answerService.updateAnswer(answerDTO);
        System.out.println(answerDTO);
        AnswerDTO updated = answerService.readById(1L);
        System.out.println(updated);
    }

    @Test
    void deleteAnswer() {
        answerService.deleteAnswer(1L);
    }
}