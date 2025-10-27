import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExpenseProvider } from './ExpenseContext';
import Header from './components/Header';
import Home from './components/Home';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import Summary from './components/Summary';
import './App.css';

function App() {
  return (
    <ExpenseProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddExpense />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </div>
      </Router>
    </ExpenseProvider>
  );
}

export default App;