package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Tag;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.TagDTO;
import com.project.devreview.repository.TagRepository;
import com.project.devreview.service.interf.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TagServiceImpl implements TagService {
    @Autowired
    TagRepository tagRepository;
    @Override
    public Long setNewTag(TagDTO tagDTO) {
//        Tag tag = new Tag(name);
        tagRepository.save(tagDTO.toEntity());
        return tagRepository.findByName(tagDTO.getName()).getId();
    }
    @Override
    public TagDTO readTag(Long id){
        TagDTO tagDTO = TagDTO.toDto(tagRepository.findById(id));
        return tagDTO;
    }

    @Override
    public TagDTO readTagByName(String name) {
        TagDTO tagDTO = TagDTO.toDto(tagRepository.findByName(name));
        return tagDTO;
    }

    @Override
    public Boolean isExist(String name) {
        if(tagRepository.findByName(name)==null){
            return false;
        }
        return true;
    }

    @Override
    public List<TagDTO> readByQues(QuestionDTO questionDTO) {
        return null;

    }
}
