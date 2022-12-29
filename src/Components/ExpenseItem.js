import './ExpenseItem.css'
import React, { useState } from 'react';
function ExpenseItem(props) {


    const [club, setClub] = useState(props.param.club);

    const clickhandler = () => {
        setClub(props.param.prev);
        console.log('clicked');
    }

    return (
        <div className="expense-item">
            <div>{props.param.nation}</div>
            <div className="expense-item__description">
                <h2>{club}</h2>
            </div>

            <button onClick={clickhandler}> previous team </button>
            <div className="expense-item__price">{props.param.name}</div>

        </div>
    );
}

export default ExpenseItem;