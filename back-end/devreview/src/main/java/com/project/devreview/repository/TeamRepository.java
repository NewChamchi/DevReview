package com.project.devreview.repository;

import com.project.devreview.model.domain.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TeamRepository extends JpaRepository<Team,Long> {
        List<Team> findAll();
//
//        @Modifying(clearAutomatically = true)
//        @Query("UPDATE \"Group\" a SET a.name = :name, a.intro = :intro WHERE a.id = :id")
//        int updateNameAndIntro(Long id, String name, String intro);


        @Override
        Page<Team> findAll(Pageable pageable);
}
