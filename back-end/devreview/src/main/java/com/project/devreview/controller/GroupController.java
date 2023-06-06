package com.project.devreview.controller;

import com.project.devreview.model.dto.*;
import com.project.devreview.service.interf.PostService;
import com.project.devreview.service.interf.TeamService;
import com.project.devreview.service.interf.UserService;
import com.project.devreview.service.interf.UserTeamService;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/group")
public class GroupController {
    @Autowired
    UserService userService;
    @Autowired
    TeamService teamService;
    @Autowired
    PostService postService;
    @Autowired
    UserTeamService userTeamService;



    @GetMapping(value = {"/list/{search}&{page}","/list"})
    public ResponseEntity<Object> readGroupList(
            @PathVariable(value = "search", required = false) String search,
            @PathVariable(value = "page", required = false) Integer page)
    {
        if(search==null) search = "";
        if(page==null) page=1;


        JSONObject teamjsons = new JSONObject();

        Page<TeamDTO> teams = teamService.getList(page-1);
        List<TeamDTO> teamDTOS = teamService.readTeamList();
        int count = teamDTOS.size();
        int pagecount = (int) Math.ceil(count/8.0);
        teamjsons.put("pageCount",pagecount);
        teamjsons.put("currentPage",page);

        JSONArray groups = new JSONArray();
        for(TeamDTO teamDTO : teams){
            JSONObject temp = new JSONObject();
            temp.put("id",teamDTO.getId());
            temp.put("name",teamDTO.getName());
            temp.put("description",teamDTO.getIntro());
            JSONArray users = new JSONArray();
            for(UserDTO userDTO : userTeamService.readUserByTeam(teamDTO)){
                JSONObject user = new JSONObject();
                user.put("id",userDTO.getId());
                user.put("name",userDTO.getName());
                users.put(user);
            }
            temp.put("members",users);
            JSONArray posts = new JSONArray();
            List<PostDTO> postDTOS = postService.readPostByGroup(teamDTO.getId());
            for(PostDTO postDTO:postDTOS){
                JSONObject post = new JSONObject();
                post.put("id",postDTO.getId());
                post.put("title",postDTO.getTitle());
                post.put("author",postDTO.getUserDTO().getName());
                posts.put(post);
            }
            temp.put("posts",posts);
//            temp.put("posts",PostDTO.listEntityToDto(teamDTO.toEntity().getPosts()));
            groups.put(temp);
        }
        teamjsons.put("groupArray",groups);
        return new ResponseEntity<>(teamjsons.toMap(),HttpStatus.OK);

    }

    @GetMapping(value = {"/post/list/{search}&{page}&{id}","/post/list","/post/list/{id}"})
    public ResponseEntity<Object> readPostList(
            @PathVariable(value = "search", required = false) String search,
            @PathVariable(value = "page", required = false) Integer page,
            @PathVariable(value = "id") Long id)
    {
        if(search==null) search = "";
        if(page==null) page=1;

        TeamDTO teamDTO = teamService.readTeamById(id);
        List<PostDTO> postList = postService.readPostByGroup(id);
        int count = postList.size();
        int pagecount = (int) Math.ceil(count/8.0);
        Page<PostDTO> postDTOS = postService.readPostByGroup(teamDTO,page-1);
        JSONObject result = new JSONObject();
        result.put("pageCount",pagecount);
        result.put("currentPage",page);

        JSONArray postarray = new JSONArray();
        for(PostDTO postDTO : postDTOS){
            JSONObject post = new JSONObject();
            post.put("no",postDTO.getId());
            post.put("title",postDTO.getTitle());
            post.put("author",postDTO.getUserDTO().getName());
            post.put("date",postDTO.getDatetime());
            postarray.put(post);
        }
        result.put("groupPostArray",postarray);

        return new ResponseEntity<>(result.toMap(),HttpStatus.OK);
    }

    @GetMapping("/post/{id}")
    public ResponseEntity<Object> readPost(@PathVariable(value = "id") Long id){
        PostDTO postDTO = postService.readPostById(id);
        JSONObject postjson = new JSONObject();
        postjson.put("id",postDTO.getId());
        postjson.put("title",postDTO.getTitle());
        postjson.put("author",postDTO.getUserDTO().getName());
        postjson.put("date",postDTO.getDatetime());
        postjson.put("content",postDTO.getContent());
        return new ResponseEntity<>(postjson.toMap(),HttpStatus.OK);
    }

    @GetMapping("/manage/{id}")
    public ResponseEntity<Object> readGroupManage(@PathVariable(value = "id") Long id)
    {
        TeamDTO teamDTO = teamService.readTeamById(id);
        JSONObject teamjson = new JSONObject();
        teamjson.put("id",teamDTO.getId());
        teamjson.put("groupName",teamDTO.getName());
        teamjson.put("groupDescription",teamDTO.getIntro());
        if(teamDTO.getNoticeDTO()!=null){
            teamjson.put("groupNoticeTitle",teamDTO.getNoticeDTO().getTitle());
            teamjson.put("groupNoticeContent",teamDTO.getNoticeDTO().getContent());
        } else if (teamDTO.getNoticeDTO() == null) {
            teamjson.put("groupNoticeContent","");
            teamjson.put("groupNoticeTitle","");
        }
        return new ResponseEntity<>(teamjson.toMap(),HttpStatus.OK);
    }

    @PutMapping("/manage/update")
    public String updateGroupInfo(@RequestBody Map<String, Object> map){
        TeamDTO teamDTO = teamService.readTeamById(Long.valueOf(map.get("id").toString()));
        teamDTO.setName(map.get("groupName").toString());
        teamDTO.setIntro(map.get("groupDescription").toString());
        if(!map.get("groupNoticeTitle").equals("")){
            NoticeDTO noticeDTO = new NoticeDTO(
                    map.get("groupNoticeTitle").toString(),map.get("groupNoticeContent").toString(),
                    LocalDateTime.now());

            teamDTO.setNoticeDTO(noticeDTO);
        }
        teamService.updateTeam(teamDTO);
        return "모임 수정 성공";
    }

    @GetMapping("/exile/{id}")
    public ResponseEntity<Object> getGroupExile(@PathVariable(value = "id") Long group_id){
        TeamDTO teamDTO = teamService.readTeamById(group_id);
        List<UserDTO> userDTOS = userTeamService.readUserByTeam(teamDTO);
        JSONArray jsonArray = new JSONArray();
        for(UserDTO userDTO:userDTOS){
            JSONObject userinfo = new JSONObject();
            userinfo.put("id",userDTO.getId());
            userinfo.put("name",userDTO.getName());
            jsonArray.put(userinfo);
        }
        return new ResponseEntity<>(jsonArray.toList(),HttpStatus.OK);
    }

    @PutMapping("/exile/update")
    public String exileUser(@RequestBody Map<String,Object> map){
        TeamDTO teamDTO = teamService.readTeamById(Long.valueOf(map.get("id").toString()));
        List<UserDTO> userDTOS = userTeamService.readUserByTeam(teamDTO);
        List<Long> userids = new ArrayList<>();

        JSONObject jsonObject = new JSONObject(map);
        JSONArray jsonArray = jsonObject.getJSONArray("groupMember");
        for(int i=0; i<jsonArray.length(); i++){
            JSONObject temp = (JSONObject) jsonArray.opt(i);
            Long id = Long.valueOf(temp.get("id").toString());
            userids.add(id);
        }
        for(UserDTO userDTO : userDTOS){
            if(!userids.contains(userDTO.getId())){
                userTeamService.setUserBlock(userDTO);
            };
        }
        return "멤버 수정 성공";

    }

    @GetMapping("/main/{id}")
    public ResponseEntity<Object> getGroupMain(@PathVariable(value = "id") Long id){
        TeamDTO teamDTO = teamService.readTeamById(id);
        List<ChattingDTO> chattings = ChattingDTO.listEntityToDto(teamDTO.toEntity().getChattingList());
        JSONObject result = new JSONObject();
        result.put("id",teamDTO.getId());
        if(teamDTO.getNoticeDTO()!=null){
            result.put("noticeTitle",teamDTO.getNoticeDTO().getTitle());
            result.put("noticeContent",teamDTO.getNoticeDTO().getContent());
        }else{
            result.put("noticeTitle","");
            result.put("noticeContent","");
        }
        JSONArray chats = new JSONArray();
        for(ChattingDTO chattingDTO:chattings){
            JSONObject tmp = new JSONObject();
            tmp.put("id",chattingDTO.getId());
            tmp.put("username",chattingDTO.getUserDTO().getName());
            tmp.put("type",chattingDTO.getType());
            tmp.put("content",chattingDTO.getContent());
            chats.put(tmp);
        }
        result.put("chatArray",chats);
        return new ResponseEntity<>(result.toMap(), HttpStatus.OK);
    }
}
