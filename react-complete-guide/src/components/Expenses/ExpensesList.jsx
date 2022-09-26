import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ filteredExpenses }) => {
  // Las keys sirven para evitar volver a renderizar todos los items del
  // array cada vez que se actualice la lista, ganando performance.
  // También, React chequea la longitud del array para saber si volver a
  // renderizar, por lo que no usar keys también puede causar bugs.
  return filteredExpenses.length > 0 ? (
    <ul className='expenses-list'>
      {
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      }
    </ul>
  ) : (
    <p className='expenses-list__fallback'>No expenses found.</p>
  );
};

export default ExpensesList;
