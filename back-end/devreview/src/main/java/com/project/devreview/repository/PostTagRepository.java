package com.project.devreview.repository;

import com.project.devreview.model.domain.Post;
import com.project.devreview.model.domain.PostTag;
import com.project.devreview.model.domain.Tag;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PostTagRepository extends Repository<PostTag, Long> {
    PostTag save(PostTag postTag);
    List<PostTag> findByPost(Post post);
    List<PostTag> findByTag(Tag tag);
    List<PostTag> findAll();
    PostTag findById(Long id);
    Boolean deleteById(Long id);
    Boolean deletePostTagsByPostAndTag(Post post, Tag tag);
}
