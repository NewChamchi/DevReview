package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Post;
import com.project.devreview.model.domain.Question;
import com.project.devreview.model.domain.Team;
import com.project.devreview.model.dto.PostDTO;
import com.project.devreview.model.dto.QuestionDTO;
import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.repository.PostRepository;
import com.project.devreview.repository.TeamRepository;
import com.project.devreview.service.interf.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class PostServiceImpl implements PostService {
    @Autowired
    PostRepository postRepository;
    @Autowired
    TeamRepository teamRepository;

    @Override
    public int registerPost(PostDTO postDTO) {
        postRepository.save(postDTO.toEntity());
        return 0;
    }

    @Override
    public PostDTO readPostById(Long id) {
        Post post = postRepository.findById(id).get();
        PostDTO postDTO = PostDTO.toDto(post);
        return postDTO;
    }

    @Override
    public List<PostDTO> readPostByGroup(Long groupid) {
        List<Post> posts = postRepository.findByTeam(teamRepository.findById(groupid).get());
        return PostDTO.listEntityToDto(posts);
    }

    @Override
    public Page<PostDTO> readPostByGroup(TeamDTO teamDTO, int page) {
        Pageable pageable = PageRequest.of(page, 8);
        Page<Post> entities = postRepository.findAllByTeam(pageable,teamDTO.toEntity());
        Page<PostDTO> postDTOS = entities.map(PostDTO::toDto);

        return postDTOS;
    }

    @Override
    public Page<PostDTO> readPostBySearchOrder(TeamDTO teamDTO, String search, int page) {
        Sort sort = Sort.by("datetime").descending();
        Pageable pageable = PageRequest.of(page, 8, sort);
        Page<Post> entities = postRepository.findByTitleContaining(pageable,search,teamDTO.toEntity());
        Page<PostDTO> postDTOS = entities.map(PostDTO::toDto);
        return postDTOS;
    }

    @Override
    public int updatePost(PostDTO postDTO) {
        return postRepository.updateTitleAndContent(postDTO.getId(), postDTO.getTitle(), postDTO.getContent());
    }

    @Override
    public int deletePost(Long id) {
        postRepository.deleteById(id);
        return 0;
    }
}
