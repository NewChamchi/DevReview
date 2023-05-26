package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Answer;
import com.project.devreview.model.domain.Comment;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class CommentDTO {
    private Long id;
    private String content;
    private LocalDateTime datetime;
//    private int seq;
    private AnswerDTO answerDTO;
    private UserDTO userDTO;

    //@Builder
    public CommentDTO(Long id, String content, LocalDateTime datetime, AnswerDTO answerDTO, UserDTO userDTO){
        this.id = id;
        this.content = content;
        this.datetime = datetime;
//        this.seq = seq;
        this.answerDTO = answerDTO;
        this.userDTO = userDTO;
    }
    @Builder
    public CommentDTO(String content, LocalDateTime datetime, AnswerDTO answerDTO, UserDTO userDTO){
        this.content = content;
        this.datetime = datetime;
//        this.seq = seq;
        this.answerDTO = answerDTO;
        this.userDTO = userDTO;
    }
    public CommentDTO(Comment comment){
        this.id = comment.getId();
        this.content = comment.getContent();
        this.datetime = comment.getDatetime();
//        this.seq = comment.getSeq();
        this.answerDTO = new AnswerDTO(comment.getAnswer());
        this.userDTO = new UserDTO(comment.getUser());
    }

    public void setUserDTO(UserDTO userDTO){
        this.userDTO = userDTO;
    }
    public void setAnswerDTO(AnswerDTO answerDTO){
        this.answerDTO = answerDTO;
    }

    public Comment toEntity(){
        return Comment.builder()
                .id(id)
                .content(content)
                .datetime(datetime)
                .answer(answerDTO.toEntity())
                .user(userDTO.toEntity())
                .build();
    }
    public Comment toEntity(Answer answer, User user){
        return Comment.builder()
                .id(id)
                .content(content)
                .datetime(datetime)
                .answer(answer)
                .user(user)
                .build();
    }
    public static CommentDTO toDto(Comment comment){
        return new CommentDTO(comment);
    }
    public static List<CommentDTO> listEntityToDto(List<Comment> comments){
        return comments.stream()
            .map(CommentDTO::toDto).collect(Collectors.toList());
    }
}
