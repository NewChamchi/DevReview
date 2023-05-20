package com.project.devreview.service;

import com.project.devreview.model.domain.Question;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService{
    @Autowired
    QuestionRepository questionRepository;

    @Override
    public Question registerQues(QuestionDTO questionDTO) {
        Question ques = questionDTO.toEntity();
        questionRepository.save(ques);
        return ques;
    }

    @Override
    public QuestionDTO readQues(Long id) {
        Question ques = questionRepository.findById(id);
        ques.setHit(ques.getHit()+1);
        QuestionDTO questionDTO = new QuestionDTO(ques);
        return questionDTO;
    }

    @Override
    public List<QuestionDTO> readAll() {
        List<Question> questions = questionRepository.findAll();
        List<QuestionDTO> questionDTOS = QuestionDTO.listEntityToDto(questions);
        return questionDTOS;
    }

    @Override
    public Question updateQues(QuestionDTO questionDTO) {
        Question ques = questionDTO.toEntity();
        questionRepository.save(ques);
        return ques;
    }

    @Override
    public Boolean deleteQues(Long id) {
        questionRepository.deleteById(id);
        return true;
    }
}
