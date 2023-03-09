
import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

  const [userInput,setUserInput]= useState({
    name:'',
    nation: '',
    prev: '',
    club: '',
  });

  const namechangehandler = (event) => {
setUserInput(
  {
    name : event.target.value,
  ...userInput
});
  };

  const clubchangehandler = (event) => {
    setUserInput(
      {
        club : event.target.value,
      ...userInput
    });
      };

      const prevchangehandler = (event) => {
        setUserInput(
          {
            prev : event.target.value,
          ...userInput
        });
          };

          const nationchangehandler = (event) => {
            setUserInput(
              {
                nation : event.target.value,
              ...userInput
            });
              };

return <form>
    <div className='new-expense__controls '> 
    <div className='new-new-expense__control label'>
        <label>Player Name</label>
        <input type='text' onChange={namechangehandler}/>
        </div>
        <div className='new-new-expense__control label'>
        <label>club</label>
        <input type='text' onChange={clubchangehandler}/>
        </div>
        <div className='new-new-expense__control label'>
        <label>previous club</label>
        <input type='text' onChange={prevchangehandler}/>
        </div>
        <div className='new-new-expense__control label'>
        <label>nationality</label>
        <input type='text' onChange={nationchangehandler}/>
        </div>
    </div>
    <div className='new-expense__actions'> 
  <button type='submit'>ADD DATA</button>
    </div>
</form>

};
export default ExpenseForm;