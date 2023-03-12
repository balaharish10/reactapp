import React from 'react';

import './ExpenseFilter.css';

const ExpenseFilter = () => {
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Club</label>
        <select>
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