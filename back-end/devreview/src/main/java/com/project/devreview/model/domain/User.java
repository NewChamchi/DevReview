package com.project.devreview.model.domain;

import com.project.devreview.model.dto.UserDTO;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private long id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_email")
    private String email;

    @Column(name = "user_mic")
    private int mic;

    @Column(name = "user_audio")
    private int audio;

    @Column(name = "user_login_id")
    private String loginId;

    @Column(name = "user_password")
    private String password;

    @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
    private List<Question> questions = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<UserGroup> userGroupList = new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Chatting> chattingList = new ArrayList<>();

    @Builder
    public User(Long id, String name, String email, int mic, int audio, String loginId, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.mic = mic;
        this.audio = audio;
        this.loginId = loginId;
        this.password = password;
    }

    @Builder
    public User(String name, String email, int mic, int audio, String loginId, String password){
        this.name = name;
        this.email = email;
        this.mic = mic;
        this.audio = audio;
        this.loginId = loginId;
        this.password = password;
    }

}
