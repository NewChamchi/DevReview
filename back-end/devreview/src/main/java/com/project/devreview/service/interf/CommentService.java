package com.project.devreview.service.interf;


import com.project.devreview.model.domain.Comment;
import com.project.devreview.model.dto.CommentDTO;

import java.util.List;

public interface CommentService {
    public CommentDTO registerComment(CommentDTO commentDTO);
    public List<CommentDTO> readCommentsByAnswer(Long AnswerId);
    public int updateComment(CommentDTO commentDTO);
    public void deleteComment(Long commentId);
    public void deleteByAnswer(Long answerId);
}
