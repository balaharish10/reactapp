import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {


  const onSelecthandler = (event) => {
props.data(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Club</label>
        <select value={props.selected} onChange={onSelecthandler}>
          <option value='Barca'>Barca</option>
          <option value='Real'>Real</option>
          <option value='Bayern'>Bayern</option>
          <option value='Arsenal'>Arsenal</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;