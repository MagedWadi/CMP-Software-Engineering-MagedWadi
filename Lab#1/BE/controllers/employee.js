const employees = [  
  { id: '1', name: 'Mohamed Sayed' },
];

// Get all employees
exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employees }); 
};

// Create a new employee
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;

  if (!id || !name) {
    return res.status(400).json({ success: false, message: "ID and Name are required." });
  }

  // Check if the ID already exists
  const exists = employees.some(emp => emp.id === id);
  if (exists) {
    return res.status(400).json({ success: false, message: "Employee ID already exists." });
  }

  // Add employee to the array
  employees.push({ id, name });

  res.status(201).json({ success: true, message: "Employee added.", data: { id, name } });
};

// Delete an employee
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;

  const index = employees.findIndex(emp => emp.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Employee not found." });
  }

  // Remove employee from the array
  employees.splice(index, 1);

  res.status(200).json({ success: true, message: "Employee deleted." });
};
