import React from 'react';

function Header() {
  return (
    <header>
      <img
        src="/logo.png"
        alt="Company Logo"
        style={{
          height: '60px',
          borderRadius: '8px',
          marginRight: '20px'
        }}
      />
      <input type="text" placeholder="Search by name" />
    </header>
  );
}

export default Header;