// import React from 'react';
import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import EXPENSES_DATA from './expenses';

const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  // - Para actualizar el estado dependiendo del estado previo, usamos
  // un callback, así evitamos condiciones de carrera
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );

  // * Usar JSX:
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses expenses={expenses}/>
  //   </div>
  // );
  // * Es equivalente a devolver:
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses })
  // );
}

export default App;
