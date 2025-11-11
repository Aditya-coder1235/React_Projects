import LotteryTicket from './Lottery.jsx';
import './App.css'
import { sum } from './helper.js';

function App() {
 
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  }
  return (

    <div className='adi'>
      <p className='logo'></p>
      <LotteryTicket n={3} winCondition={winCondition}/>
    </div>
  )
}

export default App
