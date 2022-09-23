import { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // Siempre por defecto se recibe un string, aunque sea number o Date
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    console.log(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title'
                 value={title} onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input type='number' id='amount'
                 value={amount} onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input type='date' id='date'
                 min='2019-01-01' max='2022-12-31'
                 value={date} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
