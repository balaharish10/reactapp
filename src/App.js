
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {

  const arr = [
    { nation: 'Argentina', club: 'PSG', name: 'L.Messi' },
    { nation: 'Spain', club: 'FC Barcelona', name: 'Pedri' }
  ];


  return (
    <div>
      <ExpenseItem nation={arr[0].nation} club={arr[0].club} name={arr[0].name} />
    </div>
  );
}

export default App;
