package com.project.devreview.repository;


import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.User;
import com.project.devreview.model.dto.QuestionDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface QuestionRepository extends Repository<Question, Long> {
    Question save(Question question);
    List<Question> findAll();
    Page<Question> findAll(Pageable pageable);
    Question findById(Long id);
    Question findByTitleAndUser(String title, User user);

    @Modifying(clearAutomatically = true)
    @Query("UPDATE Question a SET a.hit = :hit WHERE a.id = :id")
    int updateHit(@Param("id") Long id, @Param("hit") int hit);
    @Modifying(clearAutomatically = true)
    @Query("UPDATE Question a SET a.title = :title, a.content = :content WHERE a.id = :id")
    int updateTitleAndContent(@Param("id") Long id, @Param("title") String title, @Param("content") String content);
    void deleteById(Long id);


}
