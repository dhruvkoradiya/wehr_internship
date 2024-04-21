import React, { useState } from 'react';

// Leave component to display leave information
const Leave = ({ reason, duration, status, onApprove, onReject }) => {
  return (
    <div className="leave">
      <div>
        <strong>Reason:</strong> {reason}
      </div>
      <div>
        <strong>Duration:</strong> {duration}
      </div>
      <div>
        <strong>Status:</strong> {status}
      </div>
      {status === 'Pending' && (
        <div>
          <button onClick={onApprove}>Approve</button>
          <button onClick={onReject}>Reject</button>
        </div>
      )}
    </div>
  );
};

// EmployeeLeave component to display leave applications for a particular employee
const EmployeeLeave = () => {
  // Sample leave data for demonstration
  const [leaveData, setLeaveData] = useState([
    { id: 1, reason: 'Vacation', duration: '5 days', status: 'Pending' },
    { id: 2, reason: 'Sick Leave', duration: '2 days', status: 'Approved' },
    { id: 3, reason: 'Personal', duration: '1 day', status: 'Rejected' },
  ]);

  const handleApprove = (id) => {
    // Update status to 'Approved' for the leave application with the given id
    const updatedLeaveData = leaveData.map(leave => 
      leave.id === id ? { ...leave, status: 'Approved' } : leave
    );
    setLeaveData(updatedLeaveData);
  };

  const handleReject = (id) => {
    // Update status to 'Rejected' for the leave application with the given id
    const updatedLeaveData = leaveData.map(leave => 
      leave.id === id ? { ...leave, status: 'Rejected' } : leave
    );
    setLeaveData(updatedLeaveData);
  };

  return (
    <div>
      <h2>Leave Applications</h2>
      {leaveData.map(leave => (
        <Leave
          key={leave.id}
          reason={leave.reason}
          duration={leave.duration}
          status={leave.status}
          onApprove={() => handleApprove(leave.id)}
          onReject={() => handleReject(leave.id)}
        />
      ))}
    </div>
  );
};

export default EmployeeLeave;
