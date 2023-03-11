
import {useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {

  // const [userInput,setUserInput]= useState({
  //   name:'',
  //   nation: '',
  //   prev: '',
  //   club: '',
  // });
  const [name,setName]=useState('');
  const [nation,setNation]=useState('');
  const [prev,setPrev]=useState('');
  const [club,setClub]=useState('');

  const namechangehandler = (event) => {
    setName(event.target.value);
// setUserInput(
//   {
//     name : event.target.value,
//   ...userInput
// });
  };

  const clubchangehandler = (event) => {
    setClub(event.target.value);
    // setUserInput(
    //   {
    //     club : event.target.value,
    //   ...userInput
    // });
      };

      const prevchangehandler = (event) => {
        setPrev(event.target.value);
        // setUserInput(
        //   {
        //     prev : event.target.value,
        //   ...userInput
        // });
          };

          const nationchangehandler = (event) => {
            setNation(event.target.value);
            // setUserInput(
            //   {
            //     nation : event.target.value,
            //   ...userInput
            // });
              };

          const onSubmithandler= (event) => {
            event.preventDefault();
            const data={
              name : name,
              club : club,
              nation : nation,
              prev : prev
            };
            console.log (data);
  
          };


return <form onSubmit={onSubmithandler}>
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