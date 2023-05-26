package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "comment_id")
    private Long id;

    @Column(name = "comment_content")
    private String content;

    @Column(name = "comment_time")
    private LocalDateTime datetime;

/*    @Column(name = "comment_seq")
    private int seq;*/

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ans_id")
    private Answer answer;

    @Builder
    public Comment(Long id, String content, LocalDateTime datetime, User user, Answer answer){
        this.id = id;
        this.content = content;
        this.datetime = datetime;
//        this.seq = seq;
        this.user = user;
        this.answer = answer;
    }
    @Builder
    public Comment(String content, LocalDateTime datetime, User user, Answer answer){
        this.content = content;
        this.datetime = datetime;
//        this.seq = seq;
        this.user = user;
        this.answer = answer;
    }
}
