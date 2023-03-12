import React, { useState } from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {


  const [filterClub, setfilterClub] = useState('Arsenal');
  const filterdatahandler = (value) => {
    setfilterClub(value);
    console.log(value);
  };

  return (
    <div>
      <ExpenseFilter selected={filterClub} data={filterdatahandler} />
      <Card className="expenses">

        {props.items.map((expense) => (
        <ExpenseItem 
        key ={expense.id}
        name={expense.name} 
        club={expense.club} 
        nation={expense.nation} 
        prev={expense.prev} />))}



        {/* <ExpenseItem
          name={props.items[0].name}
          club={props.items[0].club}
          nation={props.items[0].nation}
          prev={props.items[0].prev}
        /> */}

      </Card>
    </div>
  );
}
export default Expenses;