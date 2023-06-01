package com.project.devreview.repository;


import com.project.devreview.model.domain.Question;
import com.project.devreview.model.dto.QuestionDTO;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface QuestionRepository extends Repository<Question, Long> {
    Question save(Question question);
    List<Question> findAll();
    Question findById(Long id);

    @Modifying(clearAutomatically = true)
    @Query("UPDATE Question a SET a.title = :title, a.content = :content WHERE a.id = :id")
    int updateTitleAndContent(Long id, String title, String content);
    void deleteById(Long id);


}
