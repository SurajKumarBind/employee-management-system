package com.ems.backend.service;

import com.ems.backend.model.Employee;
import com.ems.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Employee ko save karna (create/update)
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    // EmployeeService.java
    public List<Employee> saveMultipleEmployees(List<Employee> employees) {
        return employeeRepository.saveAll(employees);
    }

    // Sabhi employees ko fetch karna
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Employee ko ID se fetch karna
    public Optional<Employee> getEmployeeById(String id) {
        return employeeRepository.findById(id);
    }

    // Employee ko delete karna
    public void deleteEmployee(String id) {
        employeeRepository.deleteById(id);
    }
    public Employee updateEmployee(String id, Employee updatedEmployee) {
        Employee existing = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        existing.setName(updatedEmployee.getName());
        existing.setAge(updatedEmployee.getAge());
        existing.setEmail(updatedEmployee.getEmail());
        return employeeRepository.save(existing);
    }
}
