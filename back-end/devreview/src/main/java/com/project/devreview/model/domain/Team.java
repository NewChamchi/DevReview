package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "`Group`")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private Long id;

    @Column(name = "group_name")
    private String name;

    @Column(name = "group_intro")
    private String intro;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<UserTeam> userTeamList = new ArrayList<>();

    @OneToMany(mappedBy = "team",cascade = CascadeType.ALL)
    private List<Chatting> chattingList = new ArrayList<>();

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "notice_id")
    private Notice notice;


    @Builder
    public Team(Long id,String name, String intro, Notice notice){
        this.id = id;
        this.name = name;
        this.intro = intro;
        this.notice = notice;
    }
    @Builder
    public Team(String name, String intro, Notice notice){
        this.name = name;
        this.intro = intro;
        this.notice = notice;
    }
}
