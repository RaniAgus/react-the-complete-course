import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

import './ExpenseItem.css';

const ExpenseItem = ({ expense }) => {
  const changeTitleHandler = () => {
    console.log('Clicked!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={expense.date}/>
      <div className='expense-item__description'>
        <h2>{expense.title}</h2>
        <div className='expense-item__price'>${expense.amount}</div>
      </div>
      <button onClick={changeTitleHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
