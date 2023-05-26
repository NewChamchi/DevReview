package com.project.devreview.service;

import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.service.interf.QuestionService;
import com.project.devreview.service.interf.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
class QuestionServiceImplTest {
    @Autowired
    QuestionService questionService;
    @Autowired
    UserService userService;

    @Test
    void registerQues() {
        UserDTO userDTO = userService.findUserById(1L);
        QuestionDTO questionDTO = QuestionDTO.builder()
                .title("newpost")
                .content("newcontent")
                .time(LocalDateTime.now())
                .userDTO(userDTO)
                .hit(0)
                .build();
        questionService.registerQues(questionDTO);
    }

    @Test
    void readQues() {
        QuestionDTO questionDTO = questionService.readQues(3L);
        System.out.println(questionDTO);
    }

    @Test
    void readAll() {
        List<QuestionDTO> questionDTOS = questionService.readAll();
        System.out.println(questionDTOS);
    }

    @Test
    void updateQues() {
        QuestionDTO questionDTO = questionService.readQues(3L);
        questionDTO.setContent("imkim");
        questionService.updateQues(questionDTO);
        QuestionDTO updatedQuestion = questionService.readQues(3L);
        System.out.println(questionDTO);
        System.out.println(updatedQuestion);
    }

    @Test
    void deleteQues() {
        questionService.deleteQues(1L);
    }
}