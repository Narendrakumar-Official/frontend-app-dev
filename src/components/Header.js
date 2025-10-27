import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useExpenses } from '../ExpenseContext';

const Header = () => {
  const location = useLocation();
  const { expenses } = useExpenses();
  const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  return (
    <header className="header">
      <div className="header-summary">
        <div className="summary-item">
          <span className="summary-label">Total Expenses:</span>
          <span className="summary-value">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Entries:</span>
          <span className="summary-value">{expenses.length}</span>
        </div>
      </div>
      <nav className="header-nav">
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
    </header>
  );
};

export default Header;