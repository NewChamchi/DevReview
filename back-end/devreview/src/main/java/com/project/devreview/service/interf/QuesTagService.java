package com.project.devreview.service.interf;

import com.project.devreview.model.domain.Question;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.TagDTO;

import java.util.List;

public interface QuesTagService {
    public void registerQuesTag(Long quesId, Long TagId);
    public List<TagDTO> findTagByQues(QuestionDTO questionDTO);
    public List<QuestionDTO> findQuesByTag(TagDTO tagDTO);
}
