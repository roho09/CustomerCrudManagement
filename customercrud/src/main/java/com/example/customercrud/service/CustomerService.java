package com.example.customercrud.service;

import com.example.customercrud.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;

public interface CustomerService {
    Customer createCustomer(Customer customer);

    Customer updateCustomer(Long id, Customer customer);

    List<Customer> getAllCustomers(Pageable pageable, String search);

    Page<Customer> getAllCustomers(int page, int size, String[] sort, String search);

    Customer getCustomerById(Long id);

    void deleteCustomer(Long id);

    UserDetails loadUserByUsername(String username);
}
