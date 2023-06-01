package com.project.devreview.service.impl;

import com.project.devreview.model.domain.QuesTag;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Tag;
import com.project.devreview.model.dto.QuesTagDTO;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.TagDTO;
import com.project.devreview.repository.QuesTagRepository;
import com.project.devreview.repository.QuestionRepository;
import com.project.devreview.repository.TagRepository;
import com.project.devreview.service.interf.QuesTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class QuesTagServiceImpl implements QuesTagService {
    @Autowired
    QuesTagRepository quesTagRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    TagRepository tagRepository;

    @Override
    public void registerQuesTag(Long quesId, Long tagId){
        Question ques = questionRepository.findById(quesId);
        Tag tag = tagRepository.findById(tagId);
        QuesTag quesTag = new QuesTag(tag,ques);
        quesTagRepository.save(quesTag);
    }

    @Override
    public List<TagDTO> findTagByQues(QuestionDTO questionDTO) {
        List<QuesTag> quesTags = quesTagRepository.findByQuestionId(questionDTO.getId());
        List<QuesTagDTO> quesTagDTOS = QuesTagDTO.listEntityToDto(quesTags);
        List<TagDTO> tags = new ArrayList<>();
        for(QuesTagDTO quesTagDTO:quesTagDTOS){
            tags.add(quesTagDTO.getTagDTO());
        }
        return tags;
    }

    @Override
    public List<TagDTO> findTagByQuesId(Long quesId) {
        List<QuesTag> quesTags = quesTagRepository.findByQuestionId(quesId);
        List<QuesTagDTO> quesTagDTOS = QuesTagDTO.listEntityToDto(quesTags);
        List<TagDTO> tags = new ArrayList<>();
        for(QuesTagDTO quesTagDTO : quesTagDTOS){
            tags.add(quesTagDTO.getTagDTO());
        }
        return tags;
    }

    @Override
    public List<QuestionDTO> findQuesByTag(TagDTO tagDTO) {
        List<QuesTag> quesTags = quesTagRepository.findByTag(tagDTO.toEntity());
        List<QuesTagDTO> quesTagDTOS = QuesTagDTO.listEntityToDto(quesTags);
        List<QuestionDTO> questions = new ArrayList<>();
        for(QuesTagDTO quesTagDTO: quesTagDTOS){
            questions.add(quesTagDTO.getQuestionDTO());
        }
        return questions;
    }

    @Override
    public Boolean remove(Long questagId) {
        return quesTagRepository.deleteById(questagId);
    }

    @Override
    public Boolean removeByQuesTag(Long quesId, Long tagId) {
        return quesTagRepository.deleteByQuesIdAndTagId(quesId,tagId);
    }
}
