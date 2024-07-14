# CustomerCrudManagement
Customer CRUD Application with Sync Feature

This project is a Customer CRUD (Create, Read, Update, Delete) application built using Spring Boot, Spring Security with JWT authentication, and MySQL database. It also includes a Sync feature for updating customer data.
Features

    Authentication: JWT-based authentication and authorization for secure API access.
    Customer Management: CRUD operations for managing customer details including name, address, email, and phone number.
    Database Integration: Uses Spring Data JPA for interacting with MySQL database.
    RESTful API: Exposes REST endpoints for managing customer data.
    Pagination and Sorting: Supports pagination and sorting for listing customers.
    Sync Button: Allows manual synchronization of customer data.

Technologies Used

    Java
    Spring Boot
    Spring Security
    MySQL
    JWT (JSON Web Tokens)

Setup Instructions

To run this project locally, follow these steps:

    Clone Repository: git clone <repository-url>
    Navigate to Project Directory: cd customer-crud
    Build the Application: mvn clean install
    Run the Application: mvn spring-boot:run

Make sure to configure your MySQL database credentials in application.properties before running the application.
API Endpoints

    GET /api/customers: Retrieve all customers.
    GET /api/customers/{id}: Retrieve a customer by ID.
    POST /api/customers: Create a new customer.
    PUT /api/customers/{id}: Update an existing customer.
    DELETE /api/customers/{id}: Delete a customer by ID.

Sync Feature

The Sync button triggers an update of customer data from an external source. To use the Sync feature:

    Click on the Sync button in the application UI.
    This action will initiate a synchronization process that updates customer information based on the latest data available.

Usage

    Create a Customer: Use POSTMAN or any API client to send a POST request to /api/customers with JSON data containing customer details.

    Example:

    json

    {
        "firstName": "John",
        "lastName": "Doe",
        "street": "123 Main St",
        "address": "Apt 101",
        "city": "New York",
        "state": "NY",
        "email": "john.doe@example.com",
        "phone": "555-1234"
    }

    Retrieve Customers: Send a GET request to /api/customers to retrieve all customers or /api/customers/{id} to retrieve a specific customer by ID.

    Update a Customer: Send a PUT request to /api/customers/{id} with updated customer data.

    Delete a Customer: Send a DELETE request to /api/customers/{id} to delete a customer by ID.

License

This project is licensed under the MIT License - see the LICENSE file for details.
