import { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (event) => {
    // Para actualizar el estado dependiendo del estado previo, usamos
    // un callback, así evitamos condiciones de carrera
    setUserInput((prevState) => ({
      ...prevState,
      title: event.target.value,
    }));
  };

  const amountChangeHandler = (event) => {
    // Siempre por defecto se recibe un string, aunque sea number o Date
    setUserInput((prevState) => ({
      ...prevState,
      amount: event.target.value,
    }));
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      date: event.target.value,
    }));
  };

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input type='number' id='amount' onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input type='date' id='date'
                 min='2019-01-01' max='2022-12-31'
                 onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
