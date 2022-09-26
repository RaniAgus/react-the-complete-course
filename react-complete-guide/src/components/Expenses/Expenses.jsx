import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
import { useState } from 'react';

const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState(2020);

  const filterExpensesHandler = (year) => {
    setSelectedYear(year);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={selectedYear} onFilterExpenses={filterExpensesHandler}/>
      <ExpenseItem expense={expenses[0]}></ExpenseItem>
      <ExpenseItem expense={expenses[1]}></ExpenseItem>
      <ExpenseItem expense={expenses[2]}></ExpenseItem>
      <ExpenseItem expense={expenses[3]}></ExpenseItem>
    </Card>
  );
};

export default Expenses;
