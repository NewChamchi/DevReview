package com.project.devreview.service.interf;

import com.project.devreview.model.dto.PostDTO;

import java.util.List;

public interface PostService {
    public int registerPost(PostDTO postDTO);
    public PostDTO readPostById(Long id);
    public List<PostDTO> readPostByGroup(Long groupid);

    public int updatePost(PostDTO postDTO);
    public int deletePost(Long id);
}
