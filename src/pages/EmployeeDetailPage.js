import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { employees } from '../data';
import Header from '../components/Header';

function EmployeeDetailPage() {
  const { id } = useParams();
  const emp = employees.find(e => e.id === parseInt(id));

  // ✅ Use default value (false) if emp is not found
  const [present, setPresent] = useState(emp?.present ?? false);

  if (!emp) {
    return (
      <>
        <Header />
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Employee Not Found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Employee Detail</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
        <div>
          <p><strong>Name:</strong> {emp.name}</p>
          <p><strong>Emp ID:</strong> {emp.id}</p>
          <p><strong>Present:</strong> {present ? 'Yes' : 'No'}</p>
        </div>
        <div>
          <h4>Aadhar</h4>
          <img src={emp.aadhar} alt="Aadhar" style={{ width: '200px', borderRadius: '10px' }} />
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="mark-attendance" onClick={() => setPresent(true)}>
 		 Mark Attendance
	</button>
	<button className="remove-attendance" onClick={() => setPresent(false)}>
  		Remove Attendance
	</button>
      </div>
    </>
  );
}

export default EmployeeDetailPage;