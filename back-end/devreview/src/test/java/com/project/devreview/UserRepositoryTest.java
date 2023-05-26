package com.project.devreview;

import com.project.devreview.model.domain.User;
import com.project.devreview.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


//@SpringBootApplication(scanBasePackages = "com.project.devreview")
//@Transactional
//@RunWith(SpringRunner.class)
@SpringBootTest
class UserRepositoryTest {
        @Autowired private UserRepository userRepository;
//        @Autowired private UserService userService;
/*
    final UserRepository userRepository = new UserRepository() {
        @Override
        public User save(User user) {
            return user;
        }
    };
*/

    @Test
    void createUser(){
        User user = new User("lee","lee@email",0,0,"lee","asdf");
//        user.setName("lee");
//        user.setEmail("lee@email");
//        user.setMic(0);
//        user.setAudio(0);
//        user.setLoginId("lee");
//        user.setPassword("asdf");
        User savedUser = userRepository.save(user);
        System.out.println("user = "+user.getName());
        System.out.println("savedUser = "+savedUser.getName());
        Assertions.assertThat(user).isSameAs(savedUser);
    }

    @Test
    void findAllUser(){
        List<User> users = userRepository.findAll();
        for(int i=0; i<users.size(); i++){
            System.out.println("username = "+ users.get(i).getName());
            System.out.println("email = "+users.get(i).getEmail());
        }
//        System.out.println(users);
    }
}
