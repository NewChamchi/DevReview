package com.project.devreview.model.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class AttachedFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "file_id")
    private Long file_id;

    @Column(name = "file_name")
    private String name;

    @Column(name = "file_extention")
    private String extention;

    @Column(name = "file_address")
    private String fileadd;

    @OneToOne(mappedBy = "attachedFile")
    private Chatting chatting;

}
