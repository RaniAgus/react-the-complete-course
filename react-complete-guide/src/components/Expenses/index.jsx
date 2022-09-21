import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './index.css';

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
