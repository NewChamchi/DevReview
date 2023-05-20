package com.project.devreview.service;

import com.project.devreview.model.domain.User;
import com.project.devreview.model.dto.UserDTO;

public interface UserService {

    public User registerUser(UserDTO userDTO);
    public User findUser(Long id);
}
