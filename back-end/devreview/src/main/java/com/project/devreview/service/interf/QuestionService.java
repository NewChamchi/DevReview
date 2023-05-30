package com.project.devreview.service.interf;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.dto.AnswerDTO;
import com.project.devreview.model.dto.QuestionDTO;

import java.util.List;

public interface QuestionService {
    public Question registerQues(QuestionDTO questionDTO);
    public QuestionDTO readQues(Long id);
    public List<QuestionDTO> readAll();
    public List<AnswerDTO> readAnswers(Long id);
    public Boolean updateQues(QuestionDTO questionDTO);
    public Boolean deleteQues(Long id);
}
