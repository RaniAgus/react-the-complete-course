// import React from 'react';
import Expenses from './components/Expenses';
import expenses from './expenses';

const App = () => {
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );

  // Usar JSX es equivalente a devolver:
  // return React.createElement('div', {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { expenses })
  // );
}

export default App;
