package com.example.test;

import org.springframework.data.repository.CrudRepository;

public interface TestRepository extends CrudRepository<Test, Long> {
}