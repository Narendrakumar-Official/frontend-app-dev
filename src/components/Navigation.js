import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
        🏠 Home
      </Link>
      <Link to="/add" className={location.pathname === '/add' ? 'nav-link active' : 'nav-link'}>
        ➕ Add Expense
      </Link>
      <Link to="/expenses" className={location.pathname === '/expenses' ? 'nav-link active' : 'nav-link'}>
        📋 View Expenses
      </Link>
      <Link to="/summary" className={location.pathname === '/summary' ? 'nav-link active' : 'nav-link'}>
        📊 Summary
      </Link>
    </nav>
  );
};

export default Navigation;