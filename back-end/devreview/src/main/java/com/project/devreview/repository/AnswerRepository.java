package com.project.devreview.repository;

import com.project.devreview.model.domain.Answer;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnswerRepository extends Repository<Answer, Long> {
    Answer save(Answer answer);
    List<Answer> findAll();
    Answer findById(Long id);
    List<Answer> findByQuestionId(Long questionId);
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Answer a SET a.content = :content WHERE a.id = :id")
    int updateAnswer(@Param("id") Long id, @Param("content") String content);
    void deleteById(Long id);

}
