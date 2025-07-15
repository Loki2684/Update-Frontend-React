import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetailPage from './pages/EmployeeDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;