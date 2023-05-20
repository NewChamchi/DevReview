package com.example.test;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@AllArgsConstructor
@RequestMapping("/test")
public class TestController {
    @Autowired
    private TestRepository testRepository;

    @PostMapping(path="/add")
    @ResponseBody
    public String addNewTest(@RequestBody Test test/*@RequestParam("name") String name, @RequestParam("password") String password*/)
    {
        testRepository.save(test);
        System.out.println("test = "+test);
        System.out.println("test.getName = "+test.getTest_name());
        return "Success";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Test> getAll(){
        return testRepository.findAll();
    }
}
