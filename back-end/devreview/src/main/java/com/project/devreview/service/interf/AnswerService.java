package com.project.devreview.service.interf;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.dto.AnswerDTO;
import com.project.devreview.model.dto.QuestionDTO;

import java.util.List;

public interface AnswerService {
    public Answer registerAnswer(AnswerDTO answerDTO);
    public List<AnswerDTO> readAnswersByQues(QuestionDTO questionDTO);
    public AnswerDTO readById(Long id);
    public int updateAnswer(AnswerDTO answerDTO);
    public int deleteAnswer(Long id);
}
