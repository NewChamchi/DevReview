package com.project.devreview.model.dto;

import com.project.devreview.model.domain.User;
import com.project.devreview.model.domain.UserTeam;
import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

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
    public UserDTO(Long id, String name, String email, int mic, int audio, String loginId, String password){
        this.id = id;
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

    public static UserDTO toDto(User user){
        return new UserDTO(user);
    }
    public static List<UserDTO> listEntityToDto(List<User> users){
        return users.stream()
                .map(UserDTO::toDto).collect(Collectors.toList());
    }
}
