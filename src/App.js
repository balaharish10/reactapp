
import './App.css';
//import ExpenseItem from './Components/ExpenseItem/ExpenseItem';
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';

const ini_arr = [
  { id: 1,nation: 'Argentina', club: 'FC Barcelona', name: 'L.Messi' ,prev:'NOB'},
  { id: 2,nation: 'Spain', club: 'FC Barcelona', name: 'Pedri' , prev:'Las Palmas'},
  { id: 3,nation: 'Spain', club: 'FC Barcelona', name: 'Gavi' , prev:'La Masia'},
];

function App() {

const [arr,setArr]=useState(ini_arr);

  const newExpensehandler = expense => {
setArr((prev)=> {
  return [expense,...prev];
});
    
  };

  return (
    <div>
      <NewExpense getExpense= {newExpensehandler}/>
      <Expenses items = {arr}/>
    </div>
  );
}

export default App;
