package com.project.devreview.repository;

import com.project.devreview.model.domain.Post;
import com.project.devreview.model.domain.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    List<Post> findByTeam(Team team);

    @Modifying(clearAutomatically = true)
    @Query("UPDATE Post a SET a.title = :title, a.content = :content WHERE a.id = :id")
    int updateTitleAndContent(Long id, String title, String content);

    Page<Post> findAllByTeam(Pageable pageable, Team team);
}
