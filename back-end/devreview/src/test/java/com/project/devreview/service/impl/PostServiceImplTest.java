package com.project.devreview.service.impl;

import com.project.devreview.model.dto.PostDTO;
import com.project.devreview.service.interf.PostService;
import com.project.devreview.service.interf.TeamService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class PostServiceImplTest {
    @Autowired
    PostService postService;
    @Autowired
    TeamService teamService;

    @Test
    void registerPost() {
        PostDTO postDTO = new PostDTO("title","2group post test", LocalDateTime.now(),teamService.readTeamById(2L));
        postService.registerPost(postDTO);
    }

    @Test
    void readPostById() {
        PostDTO postDTO = postService.readPostById(1L);
        System.out.println(postDTO);
    }

    @Test
    void readPostByGroup() {
        List<PostDTO> postDTOS = postService.readPostByGroup(2L);
        for(PostDTO post : postDTOS){
            System.out.println(post);
        }
    }

    @Test
    void updatePost() {
        PostDTO postDTO = postService.readPostById(1L);
        postDTO.setContent("2group post content change");
        postDTO.setTitle("changedd");
        postService.updatePost(postDTO);
        System.out.println(postDTO);
        System.out.println(postService.readPostById(1L));
    }

    @Test
    void deletePost() {
        postService.deletePost(3L);
    }
}