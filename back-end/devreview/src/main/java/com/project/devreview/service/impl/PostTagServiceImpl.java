package com.project.devreview.service.impl;

import com.project.devreview.model.domain.Post;
import com.project.devreview.model.domain.PostTag;
import com.project.devreview.model.domain.Tag;
import com.project.devreview.model.dto.PostDTO;
import com.project.devreview.model.dto.PostTagDTO;
import com.project.devreview.model.dto.TagDTO;
import com.project.devreview.repository.PostRepository;
import com.project.devreview.repository.PostTagRepository;
import com.project.devreview.repository.TagRepository;
import com.project.devreview.service.interf.PostTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class PostTagServiceImpl implements PostTagService {
    @Autowired
    PostTagRepository postTagRepository;
    @Autowired
    PostRepository postRepository;
    @Autowired
    TagRepository tagRepository;
    @Override
    public int registerPostTag(PostTagDTO postTagDTO) {
        postTagRepository.save(postTagDTO.toEntity());
        return 0;
    }

    @Override
    public PostTagDTO readPostTag(Long id) {
        PostTagDTO postTagDTO = PostTagDTO.toDto(postTagRepository.findById(id));
        return postTagDTO;
    }

    @Override
    public List<PostDTO> readPostByTag(Long tagid) {
        List<PostTagDTO> postDTOS = PostTagDTO.listEntityToDto(postTagRepository.findByTag(tagRepository.findById(tagid)));
        List<PostDTO> posts = new ArrayList<>();
        for(PostTagDTO postTagDTOs:postDTOS){
            posts.add(postTagDTOs.getPostDTO());
        }
        return posts;
    }

    @Override
    public List<TagDTO> readTagByPost(Long postid) {
        List<PostTagDTO> postTags = PostTagDTO.listEntityToDto(postTagRepository.findByPost(postRepository.findById(postid).get()));
        List<TagDTO> tags = new ArrayList<>();
        for(PostTagDTO postTagDTO: postTags){
            tags.add(postTagDTO.getTagDTO());
        }
        return tags;
    }

    @Override
    public int deletePostTagByPostAndTag(Post post, Tag tag) {
        postTagRepository.deletePostTagsByPostAndTag(post, tag);
        return 0;
    }
}
