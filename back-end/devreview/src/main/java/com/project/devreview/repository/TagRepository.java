package com.project.devreview.repository;

import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Tag;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface TagRepository extends Repository<Tag,Long> {
    void save(Tag tag);
    List<Tag> findAll();
    Tag findById(Long id);
    Tag findByName(String name);
}
