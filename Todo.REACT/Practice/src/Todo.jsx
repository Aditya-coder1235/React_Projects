import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import './Todo.css';

export default function Todos(){
    let[todos,settodos]=useState([{task:"sample task",id:uuidv4(),isDone:false}]);
    let[newtodos,setnewtodos]=useState("");

    let addtodos=()=>{
        settodos((prev)=>[
            ...prev,{task:newtodos,id:uuidv4(),isDone:false}
        ])
        setnewtodos("")
    }


    let inpvalue=(event)=>{
        setnewtodos(event.target.value)
    }
    let deltodo=(id)=>{
        settodos(todos.filter((todo)=>todo.id != id));
    }
    let markAsDoneAll=()=>{
        settodos(todos.map((todo)=>{
            return{
                ...todo,isDone:true
            }
        }))
    }
    let markAsDone=(id)=>{
        settodos(todos.map((todo)=>{
            if(todo.id==id){
                return{
                ...todo,isDone:true
            }
            }else{
                return todo
            }
            
        }))
    }
    
    return(
    <div className="todos">
        <input placeholder="Enter Todos" value={newtodos} onChange={inpvalue} className="inp"/>
       
        <button onClick={addtodos} className="addbtn"><i class="fa-solid fa-plus"></i></button>
        <hr></hr>
        <h3>Todos List</h3>
        <hr></hr>
        <ol>
            {
                todos.map((todo)=>(
                  <li key={todo.id}><span style={todo.isDone ? {textDecorationLine:"line-through"}:{}} className="li">{todo.task}</span>
                  &nbsp; &nbsp;
                  <button onClick={()=>deltodo(todo.id)} className="btn1"><i class="fa-solid fa-trash"></i></button>&nbsp;&nbsp;
                  <button onClick={()=>markAsDone(todo.id)} className="btn2"><i class="fa-solid fa-check"></i></button></li>
                  
                ))
            }
            <button onClick={markAsDoneAll} className="btnall"><i class="fa-solid fa-check"></i></button>
        </ol>
    </div>
    )
}