import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  // los hooks solo deben ser invocados dentro de un componente
  // NO invocar dentro de una nested function
  const [title, setTitle] = useState(expense.title);

  const changeTitleHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
