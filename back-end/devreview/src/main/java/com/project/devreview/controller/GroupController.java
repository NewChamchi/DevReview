package com.project.devreview.controller;

import com.project.devreview.model.dto.PostDTO;
import com.project.devreview.model.dto.TeamDTO;
import com.project.devreview.model.dto.UserDTO;
import com.project.devreview.service.interf.PostService;
import com.project.devreview.service.interf.TeamService;
import com.project.devreview.service.interf.UserService;
import com.project.devreview.service.interf.UserTeamService;
import lombok.AllArgsConstructor;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

        Page<TeamDTO> teams = teamService.getList(page-1);
        List<TeamDTO> teamDTOS = teams.stream().toList();
        JSONObject teamjsons = new JSONObject();
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

/*    @GetMapping(value = {"/post/list/{search}&{page}","/post/list"})
    public ResponseEntity<Object> readPostList(
            @PathVariable(value = "search", required = false) String search,
            @PathVariable(value = "page", required = false) Integer page)
    {
        if(search==null) search = "";
        if(page==null) page=1;

    }*/

    @GetMapping("/post/{id}")
    public PostDTO readPost(@PathVariable(value = "id") Long id){
        return postService.readPostById(id);
    }

    @GetMapping("/manage/{id}")
    public TeamDTO readGroupManage(@PathVariable(value = "id") Long id)
    {
        return teamService.readTeamById(id);
    }

    @PutMapping("/manage/update")
    public String updateGroupInfo(@RequestBody Map<String, Object> map){
        TeamDTO teamDTO = teamService.readTeamById((Long) map.get("id"));
        teamDTO.setName(map.get("groupName").toString());
        teamDTO.setIntro(map.get("groupDescription").toString());
        teamService.updateTeam(teamDTO);
        return "모임 수정 성공";
    }

    @GetMapping("/exile/{id}")
    public ResponseEntity<Object> getGroupExile(@PathVariable(value = "id") Long group_id){
        TeamDTO teamDTO = teamService.readTeamById(group_id);
        List<UserDTO> userDTOS = userTeamService.readUserByTeam(teamDTO);
        return new ResponseEntity<>(userDTOS,HttpStatus.OK);
    }

/*    @PutMapping("/exile/update")
    public String exileUser(@RequestBody Map<String,Object> map){

    }*/

/*    @GetMapping("/main/{id}")
    public ResponseEntity<Object> getGroupMain(@PathVariable(value = "id") Long id){
        TeamDTO teamDTO = teamService.readTeamById(id);
        teamDTO.toEntity().getChattingList();
    }*/
}
