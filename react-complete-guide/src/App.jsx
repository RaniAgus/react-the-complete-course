import Expenses from './components/Expenses';
import expenses from './expenses';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
