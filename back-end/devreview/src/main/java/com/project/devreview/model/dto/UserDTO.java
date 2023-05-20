package com.project.devreview.model.dto;

import com.project.devreview.model.domain.User;
import lombok.Builder;
import lombok.Data;

@Data
public class UserDTO {

    private long id;
    private String name;
    private String email;
    private int mic;
    private int audio;
    private String loginId;
    private String password;

    @Builder
    public UserDTO(String name, String email, int mic, int audio, String loginId, String password){
        this.name = name;
        this.email = email;
        this.mic = mic;
        this.audio = audio;
        this.loginId = loginId;
        this.password = password;
    }

    public UserDTO(User user){
        id = user.getId();
        name = user.getName();
        email = user.getEmail();
        mic = user.getMic();
        audio = user.getAudio();
        loginId = user.getLoginId();
        password = user.getPassword();
    }

    public User toEntity(){
        return User.builder()
                .id(id)
                .name(name)
                .email(email)
                .mic(mic)
                .audio(audio)
                .loginId(loginId)
                .password(password)
                .build();
    }

}
