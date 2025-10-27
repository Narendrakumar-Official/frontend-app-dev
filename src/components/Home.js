import React from 'react';
import { useExpenses } from '../ExpenseContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { expenses } = useExpenses();
  const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  return (
    <div className="expense-container">
      <h1 className="expense-title">💰 Welcome to Expense Tracker</h1>
      <p className="welcome-text">Take control of your finances and track your spending habits</p>
      
      <div className="home-stats">
        <div className="stat-card">
          <h3>💵 Total Spent</h3>
          <p className="stat-amount">₹{totalAmount.toFixed(2)}</p>
        </div>
        <div className="stat-card">
          <h3>📈 Total Entries</h3>
          <p className="stat-count">{expenses.length}</p>
        </div>
      </div>
      
      {expenses.length === 0 ? (
        <div className="getting-started">
          <h3>🎆 Ready to start tracking?</h3>
          <p>Add your first expense to begin your financial journey!</p>
          <Link to="/add" className="primary-action-btn">✨ Add Your First Expense</Link>
        </div>
      ) : (
        <div className="home-actions">
          <Link to="/add" className="action-btn">➕ Add New Expense</Link>
          <Link to="/expenses" className="action-btn">📋 View All Expenses</Link>
          <Link to="/summary" className="action-btn">📈 View Summary</Link>
        </div>
      )}
    </div>
  );
};

export default Home;