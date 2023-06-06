package com.project.devreview.service.interf;

import com.project.devreview.model.dto.TeamDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TeamService {
    public int registerTeam(TeamDTO teamDTO);
    public List<TeamDTO> readTeamList();
    public TeamDTO readTeamById(Long id);

    public int updateTeam(TeamDTO teamDTO);
    public int deleteTeamById(Long id);

    public Page<TeamDTO> getList(int page);
    public Page<TeamDTO> getSearchOrderList(int page, String search);
}
