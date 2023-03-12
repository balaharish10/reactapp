
import './App.css';
//import ExpenseItem from './Components/ExpenseItem/ExpenseItem';
import Expenses from './Components/Expenses/Expenses'
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
      <Expenses items = {arr}/>
    </div>
  );
}

export default App;
