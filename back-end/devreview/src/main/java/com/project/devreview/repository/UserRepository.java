package com.project.devreview.repository;

import com.project.devreview.model.domain.User;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

import java.util.List;

//@SpringBootApplication(scanBasePackages = "com.project.devreview")
public interface UserRepository extends Repository<User, Long> {
    User save(User user);
    User findById(long id);
    User findByName(String name);
    List<User> findAll();
    long count();
    void delete(User user);
    boolean existsById(long id);
}
