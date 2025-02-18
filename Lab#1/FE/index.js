// Fetch and display employees
function fetchEmployees() {
  fetch('http://localhost:3000/api/v1/employee')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('dataTable');
      tableBody.innerHTML = '';
      const list = data.data;

      list.forEach(item => {
        const row = document.createElement('tr');

        const idCell = document.createElement('td');
        idCell.textContent = item.id;
        row.appendChild(idCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        // Delete button
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.setAttribute('data-id', item.id);
        //deleteButton.addEventListener('click', () => deleteEmployee(item.id)); // Add event listener
        deleteCell.appendChild(deleteButton);

        row.appendChild(deleteCell);
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error(error));
}
// Add event listener to submit button
document.getElementById('employeeForm').addEventListener('submit', createEmployee);
// Add event listener to delete button
document.getElementById('dataTable').addEventListener('click', event => {if (event.target.tagName === 'BUTTON') deleteEmployee(event.target.getAttribute('data-id'));});
// Create an employee
function createEmployee(event) {
  event.preventDefault(); // Prevent form submission refresh

  const nameInput = document.getElementById('name').value.trim();
  const idInput = document.getElementById('id').value.trim();

  if (!nameInput || !idInput) {
    alert('Please enter both name and ID');
    return;
  }

  fetch('http://localhost:3000/api/v1/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: idInput, name: nameInput })
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      fetchEmployees(); // Refresh table
      document.getElementById('employeeForm').reset(); // Clear form
    })
    .catch(error => console.error(error));
}

// Delete an employee
function deleteEmployee(id) {
  fetch(`http://localhost:3000/api/v1/employee/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      fetchEmployees(); // Refresh table
    })
    .catch(error => console.error(error));
}


// Initial fetch
fetchEmployees();
