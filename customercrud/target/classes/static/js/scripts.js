let token = '';

function login() {
    const loginId = document.getElementById('login-id').value;
    const password = document.getElementById('password').value;

    fetch('https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login_id: loginId,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        token = data.token;
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('customer-list-screen').style.display = 'block';
        loadCustomers();
    })
    .catch(error => console.error('Error:', error));
}

function loadCustomers() {
    fetch('/api/customers', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(customers => {
        const tbody = document.getElementById('customer-table-body');
        tbody.innerHTML = '';
        customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.firstName}</td>
                <td>${customer.lastName}</td>
                <td>${customer.address}</td>
                <td>${customer.city}</td>
                <td>${customer.state}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                    <button onclick="editCustomer(${customer.id})">Edit</button>
                    <button onclick="deleteCustomer(${customer.id})">Delete</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
}

function showAddCustomer() {
    document.getElementById('customer-list-screen').style.display = 'none';
    document.getElementById('add-customer-screen').style.display = 'block';
}

function addCustomer() {
    const customer = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        street: document.getElementById('street').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    fetch('/api/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(customer)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('add-customer-screen').style.display = 'none';
        document.getElementById('customer-list-screen').style.display = 'block';
        loadCustomers();
    })
    .catch(error => console.error('Error:', error));
}

function syncCustomers() {
    fetch('https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(customers => {
        customers.forEach(customer => {
            // Here, we assume your backend has an API to either update or add a customer
            fetch('/api/customers', {
                method: 'POST', // Or PUT if you want to update existing records
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(customer)
            })
            .then(response => response.json())
            .then(data => {
                loadCustomers();
            })
            .catch(error => console.error('Error:', error));
        });
    })
    .catch(error => console.error('Error:', error));
}

function editCustomer(id) {
    // Implement edit functionality
}

function deleteCustomer(id) {
    fetch(`/api/customers/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(() => loadCustomers())
    .catch(error => console.error('Error:', error));
}

function filterCustomers() {
    const search = document.getElementById('search').value.toLowerCase();
    const rows = document.querySelectorAll('#customer-table-body tr');
    rows.forEach(row => {
        const cells = row.getElementsByTagName('td');
        const firstName = cells[0].innerText.toLowerCase();
        const lastName = cells[1].innerText.toLowerCase();
        if (firstName.includes(search) || lastName.includes(search)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
