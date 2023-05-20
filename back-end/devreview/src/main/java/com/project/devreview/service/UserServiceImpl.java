package com.project.devreview.service;

import com.project.devreview.model.domain.User;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.repository.UserRepository;
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
    public User findUser(Long id) {
        return null;
    }
}
