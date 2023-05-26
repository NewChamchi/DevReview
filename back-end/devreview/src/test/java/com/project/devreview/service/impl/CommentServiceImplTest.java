package com.project.devreview.service.impl;

import com.project.devreview.model.dto.AnswerDTO;
import com.project.devreview.model.dto.CommentDTO;
import com.project.devreview.service.interf.AnswerService;
import com.project.devreview.service.interf.CommentService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;


@SpringBootTest
class CommentServiceImplTest {
    @Autowired
    CommentService commentService;
    @Autowired
    AnswerService answerService;
    @Test
    void registerComment() {
        AnswerDTO answerDTO = answerService.readById(1L);
        commentService.registerComment(CommentDTO.builder()
                .content("its not true").datetime(LocalDateTime.now())
                .answerDTO(answerDTO).userDTO(answerDTO.getUserDTO())
                .build());
    }

    @Test
    void readCommentsByAnswer() {
        List<CommentDTO> commentDTOS = commentService.readCommentsByAnswer(1L);
        for(CommentDTO commentDTO: commentDTOS){
            System.out.println(commentDTO);
        }
    }

    @Test
    void updateComment() {
        List<CommentDTO> commentDTOS = commentService.readCommentsByAnswer(2L);
        CommentDTO commentDTO = commentDTOS.get(1);
        commentDTO.setContent("change content");
        commentService.updateComment(commentDTO);
        System.out.println(commentDTOS);
        List<CommentDTO> updatedComments = commentService.readCommentsByAnswer(2L);
        System.out.println(updatedComments);
    }

    @Test
    void deleteComment() {
        List<CommentDTO> commentDTOS = commentService.readCommentsByAnswer(2L);
        CommentDTO commentDTO = commentDTOS.get(commentDTOS.size()-1);
        commentService.deleteComment(commentDTO.getId());
    }

    @Test
    void deleteByAnswer() {
        commentService.deleteByAnswer(1L);
    }
}