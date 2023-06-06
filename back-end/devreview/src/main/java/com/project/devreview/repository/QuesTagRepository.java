package com.project.devreview.repository;

import com.project.devreview.model.domain.QuesTag;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Tag;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface QuesTagRepository extends Repository<QuesTag, Long> {
    QuesTag save(QuesTag quesTag);
    List<QuesTag> findByQuestionId(Long quesId);
    List<QuesTag> findByTag(Tag tag);
    List<QuesTag> findAll();
    QuesTag findById(Long id);

    Boolean deleteById(Long id);
    int deleteByQuestionAndTag(Question quesId, Tag TagId);
}
