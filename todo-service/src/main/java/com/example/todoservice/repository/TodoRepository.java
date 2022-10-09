package com.example.todoservice.repository;

import com.example.todoservice.entity.Todo;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "todos",path = "todos")
@CrossOrigin("*")
public interface TodoRepository extends PagingAndSortingRepository<Todo,Long> {
}
