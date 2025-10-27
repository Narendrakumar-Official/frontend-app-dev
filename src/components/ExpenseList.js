import React from 'react';
import { useExpenses } from '../ExpenseContext';
import { Link } from 'react-router-dom';

const ExpenseList = () => {
  const { expenses, deleteExpense } = useExpenses();

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      deleteExpense(id);
    }
  };

  return (
    <div className="expense-container">
      <div className="page-header">
        <h1 className="expense-title">📋 All Expenses</h1>
        <Link to="/add" className="add-expense-btn">+ Add New Expense</Link>
      </div>
      
      <div className="expense-table-container">
        {expenses.length === 0 ? (
          <div className="empty-state">
            <p>🎯 No expenses found!</p>
            <p>Start tracking your expenses by adding your first one.</p>
            <Link to="/add" className="get-started-btn">Get Started</Link>
          </div>
        ) : (
          <>
            <div className="expense-count">
              Showing {expenses.length} expense{expenses.length !== 1 ? 's' : ''}
            </div>
            <table className="expense-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td>
                      <div className="expense-title-cell">
                        <strong>{expense.title}</strong>
                        {expense.description && <small>{expense.description}</small>}
                      </div>
                    </td>
                    <td className="amount-cell">₹{parseFloat(expense.amount).toFixed(2)}</td>
                    <td>
                      <span className="category-badge">{expense.category}</span>
                    </td>
                    <td>{new Date(expense.date).toLocaleDateString()}</td>
                    <td>
                      <button 
                        className="delete-btn" 
                        onClick={() => handleDelete(expense.id, expense.title)}
                        title="Delete this expense"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;