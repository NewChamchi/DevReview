package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "notice_id")
    private Long id;

    @Column(name = "notice_title")
    private String title;

    @Column(name = "notice_content")
    private String content;

    @Column(name = "notice_time")
    private LocalDateTime datetime;



    @Builder
    public Notice(Long id, String title, String content, LocalDateTime datetime){
        this.id= id;
        this.title = title;
        this.content = content;
        this.datetime = datetime;
    }
    @Builder
    public Notice(String title, String content, LocalDateTime datetime){
        this.title = title;
        this.content = content;
        this.datetime = datetime;
    }
}
