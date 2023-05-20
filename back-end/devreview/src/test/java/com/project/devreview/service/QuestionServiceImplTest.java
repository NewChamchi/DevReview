package com.project.devreview.service;

import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.UserDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuestionServiceImplTest {
    @Autowired
    QuestionService questionService;

    @Test
    void registerQues() {
        QuestionDTO questionDTO = QuestionDTO.builder()
                .title("newpost")
                .content("newcontent")
                .time(LocalDateTime.now())
                .userDTO(UserDTO.builder().name("kim").email("kim@abc.com").mic(0).audio(1).loginId("kim01").password("asdf").build())
                .hit(0)
                .build();
        questionService.registerQues(questionDTO);
    }

    @Test
    void readQues() {

    }

    @Test
    void readAll() {
    }

    @Test
    void updateQues() {
    }

    @Test
    void deleteQues() {
    }
}