package com.project.devreview.service.impl;

import com.project.devreview.model.domain.QuesTag;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Tag;
import com.project.devreview.model.dto.AnswerDTO;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.repository.*;
import com.project.devreview.service.interf.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class QuestionServiceImpl implements QuestionService {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    AnswerRepository answerRepository;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    QuesTagRepository quesTagRepository;
    @Autowired
    TagRepository tagRepository;

    @Override
    public Question registerQues(QuestionDTO questionDTO) {
        Question ques = questionDTO.toEntity();
        questionRepository.save(ques);
        return ques;
    }

    @Override
    public QuestionDTO readQues(Long id) {
        Question ques = questionRepository.findById(id);
//        ques.setHit(ques.getHit()+1);
        QuestionDTO questionDTO = new QuestionDTO(ques);
        return questionDTO;
    }

    @Override
    public QuestionDTO readByTitleAndUser(QuestionDTO questionDTO) {
        return QuestionDTO.toDto(questionRepository.findByTitleAndUser(questionDTO.getTitle(),questionDTO.getUserDTO().toEntity()));
    }

    @Override
    public List<QuestionDTO> readAll() {
        List<Question> questions = questionRepository.findAll();
        List<QuestionDTO> questionDTOS = QuestionDTO.listEntityToDto(questions);
        return questionDTOS;
    }

    @Override
    public Page<QuestionDTO> readAllforPage(Page page) {
        return null;
    }

    @Override
    public List<AnswerDTO> readAnswers(Long id) {
        Question question = questionRepository.findById(id);
        return AnswerDTO.listEntityToDto(question.getAnswers());

    }

    @Override
    public Boolean updateQues(QuestionDTO ques) {
//        Question ques = questionDTO.toEntity();
        List<QuesTag> quesTags = quesTagRepository.findByQuestionId(ques.getId());
        questionRepository.updateTitleAndContent(ques.getId(),ques.getTitle(),ques.getContent());
        return true;
    }

    @Override
    public Boolean deleteQues(Long id) {

        questionRepository.deleteById(id);
        return true;
    }
}
