package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity(name = "Group")
@Getter
@NoArgsConstructor
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private long id;

    @Column(name = "group_name")
    private String name;

    @Column(name = "group_intro")
    private String intro;

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<UserGroup> userGroupList = new ArrayList<>();

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<Notice> notices = new ArrayList<>();

    @OneToMany(mappedBy = "team",cascade = CascadeType.ALL)
    private List<Chatting> chattingList = new ArrayList<>();

    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL)
    private List<Post> posts = new ArrayList<>();
}
