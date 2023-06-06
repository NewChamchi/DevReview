package com.project.devreview.service.impl;

import com.project.devreview.model.dto.TagDTO;
import com.project.devreview.service.interf.QuestionService;
import com.project.devreview.service.interf.TagService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TagServiceImplTest {
    @Autowired
    TagService tagService;
//    QuestionService questionService;

    @Test
    void setNewTag() {
        tagService.setNewTag(new TagDTO("Spring"));
    }

    @Test
    void readByQues() {
        TagDTO tagDTO = tagService.readTag(1L);
        System.out.println(tagDTO);
    }
}