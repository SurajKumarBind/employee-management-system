package com.ems.backend.controller;

import com.ems.backend.model.Employee;
import com.ems.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:5173") // React app ka URL
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Employee ko create/update karna
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    // EmployeeController.java
    @PostMapping("/multiple")
    public List<Employee> addMultipleEmployees(@RequestBody List<Employee> employees) {
        return employeeService.saveMultipleEmployees(employees);
    }

    // Sabhi employees ko get karna
    @GetMapping
    public List<Employee> getEmployees() {
        return employeeService.getAllEmployees();
    }

    // Employee ko ID se get karna
    @GetMapping("/{id}")
    public Optional<Employee> getEmployee(@PathVariable String id) {
        return employeeService.getEmployeeById(id);
    }

    // Employee ko delete karna
    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable String id) {
        employeeService.deleteEmployee(id);
    }
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable String id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }

}
