package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Team;
import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.repository.TeamRepository;
import com.project.devreview.service.interf.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class TeamServiceImpl implements TeamService {
    @Autowired
    TeamRepository teamRepository;
    @Override
    public int registerTeam(TeamDTO teamDTO) {
        teamRepository.save(teamDTO.toEntity());
        return 1;
    }

    @Override
    public List<TeamDTO> readTeamList() {
        List<Team> teams = teamRepository.findAll();
        List<TeamDTO> teamDTOS = TeamDTO.listEntityToDto(teams);
        return teamDTOS;
    }

    @Override
    public TeamDTO readTeamById(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        Team newteam = team.get();
        TeamDTO teamDTO = TeamDTO.toDto(newteam);

//        TeamDTO teamDTO = TeamDTO.toDto(team.get());
        return teamDTO;
    }

    @Override
    public int updateTeam(TeamDTO teamDTO) {
        teamRepository.save(teamDTO.toEntity());
        return 0;
    }


    @Override
    public int deleteTeamById(Long id) {
        teamRepository.delete(teamRepository.findById(id).get());
        return 0;
    }

    @Override
    public Page<TeamDTO> getList(int page) {
        Pageable pageable = PageRequest.of(page,8);
        Page<Team> team = teamRepository.findAll(pageable);
        Page<TeamDTO> teamDTOS = TeamDTO.toPageDtoList(team);
        return teamDTOS;
    }
}
