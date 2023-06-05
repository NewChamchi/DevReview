package com.project.devreview.service.interf;


import com.project.devreview.model.domain.Post;
import com.project.devreview.model.domain.Tag;
import com.project.devreview.model.dto.PostDTO;
import com.project.devreview.model.dto.PostTagDTO;
import com.project.devreview.model.dto.TagDTO;

import java.util.List;

public interface PostTagService {
    public int registerPostTag(PostTagDTO postTagDTO);
    public PostTagDTO readPostTag(Long id);
    public List<PostDTO> readPostByTag(Long tagid);
    public List<TagDTO> readTagByPost(Long postid);
    public int deletePostTagByPostAndTag(Post post, Tag tag);
}
