import './ExpensesFilter.css';

const ExpensesFilter = ({ options, selectedYear, onFilterExpenses }) => {
  const yearChangeHandler = (event) => {
    onFilterExpenses(+event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={yearChangeHandler}>
          {
            options.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))
          }
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
