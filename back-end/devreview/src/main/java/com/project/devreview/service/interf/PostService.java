package com.project.devreview.service.interf;

import com.project.devreview.model.domain.Team;
import com.project.devreview.model.dto.PostDTO;
import com.project.devreview.model.dto.TeamDTO;
import org.springframework.data.domain.Page;

import java.util.List;

public interface PostService {
    public int registerPost(PostDTO postDTO);
    public PostDTO readPostById(Long id);
    public List<PostDTO> readPostByGroup(Long groupid);
    public Page<PostDTO> readPostByGroup(TeamDTO teamDTO, int page);

    public int updatePost(PostDTO postDTO);
    public int deletePost(Long id);
}
