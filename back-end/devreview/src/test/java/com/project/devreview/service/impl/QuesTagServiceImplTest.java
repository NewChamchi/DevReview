package com.project.devreview.service.impl;

import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.TagDTO;
import com.project.devreview.service.interf.QuesTagService;
import com.project.devreview.service.interf.QuestionService;
import com.project.devreview.service.interf.TagService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class QuesTagServiceImplTest {
    @Autowired
    QuesTagService quesTagService;
    @Autowired
    QuestionService questionService;
    @Autowired
    TagService tagService;

    @Test
    void registerQuesTag(){
        quesTagService.registerQuesTag(1L,1L);
    }

    @Test
    void findTagByQues() {
        List<TagDTO> tagdtos = quesTagService.findTagByQues(
                questionService.readQues(1L)
        );
        for(TagDTO tagDTO:tagdtos){
            System.out.println(tagDTO);
        }
    }

    @Test
    void findQuesByTag() {
        List<QuestionDTO> quesdtos = quesTagService.findQuesByTag(
                tagService.readTag(1L)
        );
        for(QuestionDTO questionDTO:quesdtos){
            System.out.println(questionDTO);
        }
    }
}