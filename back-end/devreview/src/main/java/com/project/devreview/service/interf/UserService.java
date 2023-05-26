package com.project.devreview.service.interf;

import com.project.devreview.model.domain.User;
import com.project.devreview.model.dto.UserDTO;

public interface UserService {

    public User registerUser(UserDTO userDTO);
    public UserDTO findUserById(Long id);
    public UserDTO findUserByName(String name);
    public UserDTO updateUser(UserDTO userDTO);
    public UserDTO deleteUser(UserDTO userDTO);
}
