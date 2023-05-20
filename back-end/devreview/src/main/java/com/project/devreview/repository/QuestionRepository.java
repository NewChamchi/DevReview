package com.project.devreview.repository;


import com.project.devreview.model.domain.Question;
import com.project.devreview.model.dto.QuestionDTO;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface QuestionRepository extends Repository<Question, Long> {
    Question save(Question question);
    List<Question> findAll();
    Question findById(Long id);
    void deleteById(Long id);


}
