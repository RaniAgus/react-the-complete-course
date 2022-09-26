import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const toggleShowExpense = () => {
    setShowExpenseForm((value) => !value);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      { showExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleShowExpense} />}
      {!showExpenseForm && <button onClick={toggleShowExpense}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
