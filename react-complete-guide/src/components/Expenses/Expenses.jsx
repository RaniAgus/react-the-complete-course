import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
import { useState } from 'react';

const Expenses = ({ expenses }) => {
  // - Los hooks solo deben ser invocados dentro de un componente
  // NO invocar dentro de una nested function
  // - Para actualizar el estado dependiendo del estado previo, usamos
  // un callback, así evitamos condiciones de carrera
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
