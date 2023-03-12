import React,{useState} from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {


    const [filterClub,setfilterClub]=useState('Arsenal');
const filterdatahandler= (value) => {
    setfilterClub(value);
console.log(value);
};

  return (
<div>
    <ExpenseFilter selected= {filterClub} data= {filterdatahandler}/>
    <Card className="expenses">
      <ExpenseItem
        name={props.items[0].name}
        club={props.items[0].club}
        nation={props.items[0].nation}
        prev={props.items[0].prev}
      />
<ExpenseItem
        name={props.items[1].name}
        club={props.items[1].club}
        nation={props.items[1].nation}
        prev={props.items[1].prev}
      />
    </Card>
    </div>
  );
}
export default Expenses;