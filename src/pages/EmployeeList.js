import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { employees } from '../data';
import Footer from '../components/Footer';
import Header from '../components/Header';

function EmployeeList() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 3;

  // Filter employees by name
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);
  const start = (currentPage - 1) * employeesPerPage;
  const end = start + employeesPerPage;
  const paginatedEmployees = filteredEmployees.slice(start, end);

  return (
    <>
      {/* Header with logo and search */}
      <Header />

      <div className="container">
        {paginatedEmployees.length > 0 ? (
          paginatedEmployees.map(emp => (
            <div
              key={emp.id}
              className="card"
              onClick={() => navigate(`/employee/${emp.id}`)}
            >
              <h3>{emp.name}</h3>
              <p><strong>ID:</strong> {emp.id}</p>
              <p><strong>Status:</strong> {emp.present ? 'Present' : 'Absent'}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No employees found.</p>
        )}

        {/* Pagination buttons */}
        {totalPages > 1 && (
          <div className="pagination">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={currentPage === idx + 1 ? 'active-page' : ''}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default EmployeeList;