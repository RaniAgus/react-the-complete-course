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
  const [selectedYear, setSelectedYear] = useState(2021);

  const filterExpensesHandler = (year) => {
    setSelectedYear(year);
  }

  const yearOptions = [...new Set(expenses.map((it) => it.date.getFullYear()))];

  return (
    <Card className='expenses'>
      <ExpensesFilter options={yearOptions}
        selectedYear={selectedYear}
        onFilterExpenses={filterExpensesHandler} />
      {
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense}/>
        ))
      }
    </Card>
  );
};

export default Expenses;
