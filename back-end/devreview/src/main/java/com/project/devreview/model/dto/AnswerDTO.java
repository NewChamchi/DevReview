package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class AnswerDTO {
    private long id;
    private String content;
    private boolean isAuto;
    private LocalDateTime datetime;
    private UserDTO userDTO;
    private QuestionDTO questionDTO;
    @Builder
    public AnswerDTO( String content, boolean isAuto, LocalDateTime datetime, UserDTO userDTO, QuestionDTO questionDTO){

        this.content = content;
        this.isAuto = isAuto;
        this.datetime = datetime;
        this.userDTO = userDTO;
        this.questionDTO = questionDTO;
    }
    @Builder
    public AnswerDTO(Long id, String content, boolean isAuto, LocalDateTime datetime, UserDTO userDTO, QuestionDTO questionDTO){
        this.id = id;
        this.content = content;
        this.isAuto = isAuto;
        this.datetime = datetime;
        this.userDTO = userDTO;
        this.questionDTO = questionDTO;
    }

    public AnswerDTO(Answer answer){
        this.id = answer.getId();
        this.content = answer.getContent();
        this.isAuto = answer.isAuto();
        this.datetime = answer.getDatetime();
        this.userDTO = new UserDTO(answer.getUser());
        this.questionDTO = new QuestionDTO(answer.getQuestion());
    }

    public Answer toEntity(){
        return Answer.builder()
                .id(id)
                .content(content)
                .isAuto(isAuto)
                .datetime(datetime)
                .user(userDTO.toEntity())
                .question(questionDTO.toEntity())
                .build();
    }
    public Answer toEntity(User setUser, Question setQuestion){
        return Answer.builder()
                .id(id)
                .content(content)
                .isAuto(isAuto)
                .datetime(datetime)
                .user(setUser)
                .question(setQuestion)
                .build();
    }

    public static AnswerDTO toDto(Answer answer) {
        return new AnswerDTO(answer);
    }

    public static List<AnswerDTO> listEntityToDto(List<Answer> answers){
        return answers.stream()
                .map(AnswerDTO::toDto).collect(Collectors.toList());
    }
}
