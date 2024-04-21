import React from 'react';

// ExEmployee component to display ex-employee information
const ExEmployee = ({ name, employeeId, department, position, replacement }) => {
  return (
    <div className="ex-employee">
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Employee ID:</strong> {employeeId}
      </div>
      <div>
        <strong>Department:</strong> {department}
      </div>
      <div>
        <strong>Position:</strong> {position}
      </div>
      <div>
        <strong>Replacement:</strong> {replacement}
      </div>
    </div>
  );
};

// ExEmployees component to display a list of ex-employees
const ExEmployees = () => {
  // Sample ex-employees data for demonstration
  const exEmployees = [
    { id: 1, name: 'John Doe', employeeId: 'EMP001', department: 'Sales', position: 'Manager', replacement: 'Jane Smith' },
    { id: 2, name: 'Alice Johnson', employeeId: 'EMP002', department: 'Marketing', position: 'Coordinator', replacement: 'Bob Williams' },
    // Add more ex-employee data as needed
  ];

  return (
    <div>
      <h2>Ex-Employees</h2>
      {exEmployees.map(employee => (
        <ExEmployee
          key={employee.id}
          name={employee.name}
          employeeId={employee.employeeId}
          department={employee.department}
          position={employee.position}
          replacement={employee.replacement}
        />
      ))}
    </div>
  );
};

export default ExEmployees;
