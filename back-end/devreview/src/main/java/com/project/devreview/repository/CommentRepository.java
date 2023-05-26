package com.project.devreview.repository;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.domain.Comment;
import com.project.devreview.model.dto.CommentDTO;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface CommentRepository extends Repository<Comment,Long> {
    Comment save(Comment comment);
    Comment findByAnswerId(Long answerId);
    List<Comment> findByAnswer(Answer answer);
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Comment a set a.content = :content WHERE a.id = :id")
    int updateComment(Long id, String content);
    void deleteById(Long id);
    void deleteByAnswer(Answer answer);
}
