package com.project.devreview.service.impl;

import com.project.devreview.model.domain.User;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.repository.UserRepository;
import com.project.devreview.service.interf.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User registerUser(UserDTO userDTO){
        User user = User.builder()
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .mic(userDTO.getMic())
                .audio(userDTO.getAudio())
                .loginId(userDTO.getLoginId())
                .password(userDTO.getPassword())
                .build();
        return userRepository.save(user);
    }

    @Override
    public UserDTO findUserById(Long id) {
        User user = userRepository.findById(id);
        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .audio(user.getAudio())
                .mic(user.getMic())
                .loginId(user.getLoginId())
                .password(user.getPassword())
                .build();
    }

    @Override
    public UserDTO findUserByName(String name) {
        User user = userRepository.findByName(name);
        return UserDTO.toDto(user);
    }

    @Override
    public UserDTO updateUser(UserDTO userDTO) {
        User user = userDTO.toEntity();
        userRepository.save(user);
        return userDTO;
    }

    @Override
    public UserDTO deleteUser(UserDTO userDTO) {
        userRepository.delete(userDTO.toEntity());
        return userDTO;
    }

}
