package com.ems.backend.repository;

import com.ems.backend.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {
    // Yeh methods MongoDB ke operations ko handle karte hain.
}
