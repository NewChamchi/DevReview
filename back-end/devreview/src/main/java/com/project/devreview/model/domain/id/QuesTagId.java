package com.project.devreview.model.domain.id;


import java.io.Serializable;

public class QuesTagId implements Serializable {
    private long tag;
    private long question;

    public QuesTagId(){}
    public QuesTagId(long tag_id, long ques_id)
    {
        this.tag = tag_id;
        this.question = ques_id;
    }
}
