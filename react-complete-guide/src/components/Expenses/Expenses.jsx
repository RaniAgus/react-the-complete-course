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

  const yearOptions = [2019, 2020, 2021, 2022];

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear() === selectedYear;
  });


  // Las keys sirven para evitar volver a renderizar todos los items del
  // array cada vez que se actualice la lista, ganando performance.
  // También, React chequea la longitud del array para saber si volver a
  // renderizar, por lo que no usar keys también puede causar bugs.
  let expensesContent = <h2 className='no-expenses-label'>No expenses found.</h2>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense}/>
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter options={yearOptions}
        selectedYear={selectedYear}
        onFilterExpenses={filterExpensesHandler} />
      { expensesContent }
    </Card>
  );
};

export default Expenses;
