package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ques_id")
    private Long id;

    @Column(name = "ques_title")
    private String title;

    @Column(name = "ques_content")
    private String content;

    @Column(name = "ques_time")
    private LocalDateTime time;

    @Column(name = "ques_hit")
    private int hit;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
    private List<QuesTag> quesTagList = new ArrayList<>();


    @Builder
    public Question(Long id, String title, String content, LocalDateTime time, int hit, User user){
        this.id = id;
        this.title=title;
        this.content=content;
        this.time = time;
        this.hit = hit;
        this.user = user;
    }
    @Builder
    public Question(String title, String content, LocalDateTime time, int hit, User user){
        this.title=title;
        this.content=content;
        this.time = time;
        this.hit = hit;
        this.user = user;
    }

    public void setHit(int hit){
        this.hit = hit;
    }
}
