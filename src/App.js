
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {

  const arr = [
    { nation: 'Argentina', club: 'FC Barcelona', name: 'L.Messi' ,prev:'NOB'},
    { nation: 'Spain', club: 'FC Barcelona', name: 'Pedri' , prev:'Las Palmas'}
  ];


  return (
    <div>
      <ExpenseItem param={arr[0]} />
      <ExpenseItem param={arr[1]} />
    </div>
  );
}

export default App;
