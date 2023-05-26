package com.project.devreview.model.dto;

import com.project.devreview.model.domain.QuesTag;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Tag;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class QuesTagDTO {
    private QuestionDTO questionDTO;
    private TagDTO tagDTO;

    public QuesTagDTO(QuestionDTO questionDTO, TagDTO tagDTO){
        this.questionDTO = questionDTO;
        this.tagDTO = tagDTO;
    }
    public QuesTagDTO(QuesTag quesTag){
        this.questionDTO = QuestionDTO.toDto(quesTag.getQuestion());
        this.tagDTO = TagDTO.toDto(quesTag.getTag());
    }

    public QuesTag toEntity(){
        QuesTag quesTag = new QuesTag(tagDTO.toEntity(), questionDTO.toEntity());
        return QuesTag.builder().tag(tagDTO.toEntity()).questsion(questionDTO.toEntity()).build();
    }
    public static QuesTagDTO toDto(QuesTag quesTag){
        return new QuesTagDTO(quesTag);
    }
    public static List<QuesTagDTO> listEntityToDto(List<QuesTag> quesTags){
        return quesTags.stream()
                .map(QuesTagDTO::toDto).collect(Collectors.toList());
    }
}
