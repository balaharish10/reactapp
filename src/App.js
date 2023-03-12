
import './App.css';
import ExpenseItem from './Components/ExpenseItem/ExpenseItem';
import NewExpense from './Components/NewExpense/NewExpense';
function App() {

  const arr = [
    { nation: 'Argentina', club: 'FC Barcelona', name: 'L.Messi' ,prev:'NOB'},
    { nation: 'Spain', club: 'FC Barcelona', name: 'Pedri' , prev:'Las Palmas'},
    { nation: 'Spain', club: 'FC Barcelona', name: 'Gavi' , prev:'La Masia'},
  ];

  const newExpensehandler = expense => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense getExpense= {newExpensehandler}/>
      <ExpenseItem param={arr[0]} />
      <ExpenseItem param={arr[1]} />
    </div>
  );
}

export default App;
