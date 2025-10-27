import React from 'react';
import { useExpenses } from '../ExpenseContext';

const Summary = () => {
  const { expenses } = useExpenses();
  
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount || 0);
    return acc;
  }, {});

  const totalAmount = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  return (
    <div className="expense-container">
      <h1 className="expense-title">📊 Expense Summary</h1>
      <div className="summary-total">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
      <div className="category-breakdown">
        <h3>By Category:</h3>
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <div key={category} className="category-item">
            <span className="category-name">{category}</span>
            <span className="category-amount">${amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;