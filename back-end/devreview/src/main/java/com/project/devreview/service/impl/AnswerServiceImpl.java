package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.dto.AnswerDTO;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.repository.AnswerRepository;
import com.project.devreview.service.interf.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class AnswerServiceImpl implements AnswerService {
    @Autowired
    AnswerRepository answerRepository;
    @Override
    public Answer registerAnswer(AnswerDTO answerDTO) {
        Answer answer = answerDTO.toEntity();
        answerRepository.save(answer);
        return answer;
    }

    @Override
    public List<AnswerDTO> readAnswersByQues(QuestionDTO questionDTO) {
        List<Answer> answers = answerRepository.findByQuestionId(questionDTO.getId());
        List<AnswerDTO> answerDTOS = AnswerDTO.listEntityToDto(answers);
        return answerDTOS;
    }

    @Override
    public AnswerDTO readById(Long id) {
        AnswerDTO answerDTO = AnswerDTO.toDto(answerRepository.findById(id));
        return answerDTO;
    }

    @Override
    public int updateAnswer(AnswerDTO answerDTO) {
        answerRepository.updateAnswer(answerDTO.getId(),answerDTO.getContent());
        return 0;
    }

    @Override
    public List<Long> deleteAnswer(Long id) {
        List<Long> ids = new ArrayList<>();
        for(Answer answer : answerRepository.findByQuestionId(id)){
            ids.add(answer.getId());
        }
        answerRepository.deleteById(id);
        return ids;
    }
}
