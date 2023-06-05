package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Team;
import com.project.devreview.model.domain.User;
import com.project.devreview.model.domain.UserTeam;
import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.model.dto.UserTeamDTO;
import com.project.devreview.repository.TeamRepository;
import com.project.devreview.repository.UserRepository;
import com.project.devreview.repository.UserTeamRepository;
import com.project.devreview.service.interf.UserTeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserTeamServiceImpl implements UserTeamService {
    @Autowired
    UserTeamRepository userTeamRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    TeamRepository teamRepository;

    @Override
    public Long registerUserTeam(TeamDTO teamDTO, UserDTO userDTO) {
        userTeamRepository.save(new UserTeam(userDTO.toEntity(),teamDTO.toEntity()));
        return 0L;
    }

    @Override
    public int setUserBlock(UserDTO userDTO) {
        userTeamRepository.updateStateBlock(userDTO.getId());
        return 0;
    }

    @Override
    public List<UserDTO> readUserByTeam(TeamDTO teamDTO) {
        List<UserTeam> userTeams = userTeamRepository.findByTeam(teamDTO.toEntity());
        List<UserDTO> userDTOS = new ArrayList<>();
        for(UserTeam userTeam: userTeams){
            userDTOS.add(UserDTO.toDto(userTeam.getUser()));
        }
        return userDTOS;
    }

    @Override
    public List<TeamDTO> readTeamByUser(UserDTO userDTO) {
        List<UserTeam> teams = userTeamRepository.findByUser(userDTO.toEntity());
        List<TeamDTO> teamDTOS = new ArrayList<>();
        for(UserTeam team:teams){
            teamDTOS.add(TeamDTO.toDto(team.getTeam()));
        }
        return teamDTOS;
    }

    @Override
    public Long deleteUserFromTeam(Long user, Long team) {
        UserTeam todelete = userTeamRepository.findByUserAndTeam(userRepository.findById(user),teamRepository.findById(team).get());
        userTeamRepository.deleteById(todelete.getId());
        return 0L;
    }
}
