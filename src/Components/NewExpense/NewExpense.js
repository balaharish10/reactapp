
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

const savedatahandler = (entereddata) => {
const data ={
    ...entereddata,
    id:Math.random().toString()
};
props.getExpense(data);
};


    return <div className='new-expense '> 
<ExpenseForm onSavedata={savedatahandler}/>
    </div>
};
export default NewExpense;