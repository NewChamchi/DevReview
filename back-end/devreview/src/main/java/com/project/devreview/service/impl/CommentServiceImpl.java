package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.domain.Comment;
import com.project.devreview.model.dto.CommentDTO;
import com.project.devreview.repository.AnswerRepository;
import com.project.devreview.repository.CommentRepository;
import com.project.devreview.service.interf.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class CommentServiceImpl implements CommentService {
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    AnswerRepository answerRepository;
    @Override
    public CommentDTO registerComment(CommentDTO commentDTO) {
        Comment comment = commentDTO.toEntity();
        commentRepository.save(comment);
        return commentDTO;
    }

    @Override
    public List<CommentDTO> readCommentsByAnswer(Long AnswerId) {
        Answer thisAnswer = answerRepository.findById(AnswerId);
        List<Comment> comments = commentRepository.findByAnswer(thisAnswer);
        List<CommentDTO> commentDTOs = CommentDTO.listEntityToDto(comments);
        return commentDTOs;
    }

    @Override
    public int updateComment(CommentDTO commentDTO) {
        return commentRepository.updateComment(commentDTO.getId(), commentDTO.getContent());
    }

    @Override
    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }

    @Override
    public void deleteByAnswer(Long answerId) {
        commentRepository.deleteByAnswer(
                answerRepository.findById(answerId)
        );
    }
}
