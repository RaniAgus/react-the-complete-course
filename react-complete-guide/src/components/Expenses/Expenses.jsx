import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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

  return (
    <Card className='expenses'>
      <ExpensesFilter options={yearOptions}
        selectedYear={selectedYear}
        onFilterExpenses={filterExpensesHandler} />
      <ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
