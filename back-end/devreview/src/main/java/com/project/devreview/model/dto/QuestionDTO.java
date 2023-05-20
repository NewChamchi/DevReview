package com.project.devreview.model.dto;

import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Data
public class QuestionDTO {
    private String title;
    private String content;
    private LocalDateTime time;
    private int hit;
    private UserDTO userDTO;

    @Builder
    public QuestionDTO(String title, String content, LocalDateTime time, int hit, UserDTO userDTO){
        this.title=title;
        this.content=content;
        this.time = time;
        this.hit = hit;
        this.userDTO = userDTO;
    }
    public QuestionDTO(Question question){
        title = question.getTitle();
        content = question.getContent();
        time = question.getTime();
        hit = question.getHit();
        userDTO = new UserDTO(question.getUser());
    }

    public void setUser(UserDTO user) {
        this.userDTO = user;
    }

    public Question toEntity(){
        return Question.builder()
                .title(title)
                .content(content)
                .time(time)
                .hit(hit)
                .user(userDTO.toEntity())
                .build();
    }

    public Question toEntity(User setUser){
        return Question.builder()
                .title(title)
                .content(content)
                .time(time)
                .hit(hit)
                .user(setUser)
                .build();
    }

    public static QuestionDTO toList(Question question){
        return new QuestionDTO(question);
    }

    public static List<QuestionDTO> listEntityToDto(List<Question> questions){
        return questions.stream()
                .map(QuestionDTO::toList).collect(Collectors.toList());
    }

}
