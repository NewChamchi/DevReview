package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @Column(name = "post_title")
    private String title;

    @Column(name = "post_content",length = 1000)
    private String content;

    @Column(name = "post_time")
    private LocalDateTime datetime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "group_id")
    private Team team;

    @Builder
    public Post(Long id, String title, String content, LocalDateTime datetime, Team team){
        this.id = id;
        this.title = title;
        this.content = content;
        this.datetime = datetime;
        this.team = team;
    }

    @Builder
    public Post(String title, String content, LocalDateTime datetime, Team team){
        this.title = title;
        this.content = content;
        this.datetime = datetime;
        this.team = team;
    }

    public void setTeam(Team team){
        this.team = team;
    }

}
