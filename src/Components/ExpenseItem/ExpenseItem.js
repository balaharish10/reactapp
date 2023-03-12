import './ExpenseItem.css'
import React, { useState } from 'react';
import Card from '../UI/Card'
function ExpenseItem(props) {


  //  const [club, setClub] = useState(props.club);

    // const clickhandler = () => {
    //     setClub(props.prev);
    //     console.log('clicked');
    // }

    return (
        <Card className='expense-item'>
        <div className="expense-item">
            <div>{props.nation}</div>
            <div className="expense-item__description">
                <h2>{props.club}</h2>
            </div>

            {/* <button onClick={clickhandler}> previous team </button> */}
            <div className="expense-item__price">{props.name}</div>

        </div>
        </Card>
    );
}

export default ExpenseItem;