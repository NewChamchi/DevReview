package com.project.devreview.model.domain;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Chatting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "chat_id")
    private Long id;

    @Column(name = "chat_content")
    private String content;

    @Column(name = "chat_time")
    private LocalDateTime datetime;

    @Column(name = "chat_type")
    private int type;

/*    @Column(name = "chat_seq")
    private int seq;*/

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "group_id")
    private Team team;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "file_id")
    @Nullable
    private AttachedFile attachedFile;

    @Builder
    public Chatting(Long id, String content, LocalDateTime datetime, int type, User user, Team team, AttachedFile attachedFile){
        this.id = id;
        this.content = content;
        this.datetime = datetime;
        this.type = type;
        this.user = user;
        this.team = team;
        this.attachedFile = attachedFile;
    }
    @Builder
    public Chatting(String content, LocalDateTime datetime, int type, User user, Team team, AttachedFile attachedFile){
        this.content = content;
        this.datetime = datetime;
        this.type = type;
        this.user = user;
        this.team = team;
        this.attachedFile = attachedFile;
    }

}
