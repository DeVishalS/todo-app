package com.example.todoservice.repository;

import com.example.todoservice.entity.Transaction;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "transactions",path = "transactions")
@CrossOrigin("*")
public interface TransactionRepository extends PagingAndSortingRepository<Transaction, Long> {
}
