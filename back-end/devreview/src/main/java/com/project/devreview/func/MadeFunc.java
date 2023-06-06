package com.project.devreview.func;

import com.project.devreview.model.dto.TagDTO;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MadeFunc {
    public static List<String> StringArrayToList(String strData){
        String parseData = strData;
        parseData = parseData.replaceAll("\\[", "");
        parseData = parseData.replaceAll("\\]", "");
        parseData = parseData.replaceAll(" ", "");
        parseData = parseData.replaceAll("\\\"", "");

        List<String> dataList = new ArrayList(Arrays.asList(parseData.split(",")));
        return dataList;
    }

    public static List<String> ListTagToString(List<TagDTO> tagDTOS){

        List<String> tags = new ArrayList<>();
        for(TagDTO tagDTO : tagDTOS){
            tags.add(tagDTO.getName());
        }
        return tags;
    }
}
