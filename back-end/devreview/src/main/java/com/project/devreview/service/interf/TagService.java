package com.project.devreview.service.interf;

import com.project.devreview.model.domain.Tag;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.TagDTO;

import java.util.List;

public interface TagService {
    public Long setNewTag(TagDTO tagDTO);
    public List<TagDTO> readByQues(QuestionDTO questionDTO);
    public TagDTO readTag(Long id);
    public TagDTO readTagByName(String name);
    public Boolean isExist(String name);

}
