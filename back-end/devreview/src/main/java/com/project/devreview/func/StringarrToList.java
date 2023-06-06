package com.project.devreview.func;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StringarrToList {
    public static List<String> StringArrayToList(String strData){
        String parseData = strData;
        parseData = parseData.replaceAll("\\[", ""); // 대괄호 지움
        parseData = parseData.replaceAll("\\]", ""); // 대괄호 지움
        parseData = parseData.replaceAll(" ", ""); // 공백 지움
        parseData = parseData.replaceAll("\\\"", ""); // 쌍따옴표 지움

        List<String> dataList = new ArrayList(Arrays.asList(parseData.split(",")));
        return dataList;
    }
}
