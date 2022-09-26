import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';
import { useState } from 'react';

const Expenses = ({ expenses }) => {
  // - Los hooks solo deben ser invocados dentro de un componente
  // NO invocar dentro de una nested function
  const [selectedYear, setSelectedYear] = useState(2021);

  const filterExpensesHandler = (year) => {
    setSelectedYear(year);
  }

  const yearOptions = [...new Set(expenses.map((it) => it.date.getFullYear()))];

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === selectedYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter options={yearOptions}
        selectedYear={selectedYear}
        onFilterExpenses={filterExpensesHandler} />
      {
        // Las keys sirven para evitar volver a renderizar todos los items del
        // array cada vez que se actualice la lista, ganando performance.
        // También, React chequea la longitud del array para saber si volver a
        // renderizar, por lo que no usar keys también puede causar bugs.
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense}/>
        ))
      }
    </Card>
  );
};

export default Expenses;
