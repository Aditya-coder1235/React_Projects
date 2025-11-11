import { useState } from "react"
import { genTicket ,sum } from "./helper"
import Ticket from "./Ticket"

export default function LotteryTicket({n,winCondition}){

    let[ticket,setTicket]=useState([genTicket(n)])

    let buyTicket=()=>{
        setTicket(genTicket(n));
    }

    let isWinning=winCondition(ticket);

    return(<div>
        <h1>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <button onClick={buyTicket}>Buy Ticket</button>
        <h3>{isWinning && "Congratulation you Win Game"}</h3>

    </div>)
}