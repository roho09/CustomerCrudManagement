package com.example.customercrud.controllers;

import com.example.customercrud.model.Customer;
import com.example.customercrud.service.CustomerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/customers")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    // Create a customer
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerService.createCustomer(customer);
    }

    // Update a customer
    @PutMapping("/{customerId}")
    public Customer updateCustomer(
            @PathVariable Long customerId,
            @RequestBody Customer customerDetails
    ) {
        return customerService.updateCustomer(customerId, customerDetails);
    }

    // Get all customers with pagination, sorting, and searching
    @GetMapping
    public Page<Customer> getAllCustomers(
            Pageable pageable,
            @RequestParam(required = false) String search
    ) {
        return (Page<Customer>) customerService.getAllCustomers(pageable, search);
    }

    // Get a single customer by ID
    @GetMapping("/{customerId}")
    public Customer getCustomerById(@PathVariable Long customerId) {
        return customerService.getCustomerById(customerId);
    }

    // Delete a customer by ID
    @DeleteMapping("/{customerId}")
    public void deleteCustomer(@PathVariable Long customerId) {
        customerService.deleteCustomer(customerId);
    }
}
