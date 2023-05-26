package com.project.devreview.service.interf;

import com.project.devreview.model.domain.Question;
import com.project.devreview.model.dto.QuestionDTO;

import java.util.List;

public interface QuestionService {
    public Question registerQues(QuestionDTO questionDTO);
    public QuestionDTO readQues(Long id);
    public List<QuestionDTO> readAll();
    public Boolean updateQues(QuestionDTO questionDTO);
    public Boolean deleteQues(Long id);
}
