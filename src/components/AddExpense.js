import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useExpenses } from "../ExpenseContext"

const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const navigate = useNavigate();
  const context = useExpenses();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.category) {
      return;
    }
    
    // Add expense if context is available
    if (context.addExpense && typeof context.addExpense === 'function') {
      context.addExpense({
        ...formData,
        amount: parseFloat(formData.amount)
      });
      navigate('/expenses');
    }
    
    setFormData({ 
      title: '', 
      amount: '', 
      category: '', 
      description: '', 
      date: new Date().toISOString().split('T')[0] 
    });
  };

  return (
    <div className="expense-container">
      <h1 className="expense-title">Add Expense</h1>
      <form className="expense-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="form-input"
            step="0.01"
            min="0"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="form-input"
            required
          />

        </div>
        <div className="form-group">
          <input
            type="text"
            name="description"
            placeholder="Description (optional)"
            value={formData.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpense;
