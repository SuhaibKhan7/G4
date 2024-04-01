import React from 'react'
import {useState} from 'react'
import './AddTask.css'
export default function AddTask({tasks,setTask}) {

  
const[newtask,setnewTask]=useState('')
function newTask(event)
{
   setnewTask(event.target.value)
}
function delTask()
{
    setnewTask('')
}
function AddNewTask(event)
{
  event.preventDefault()
  console.log('Adding Task')
const createnewtask={
  id:Math.floor(Math.random()*100),
  name:newtask,
  completed:false
}
setTask([...tasks,createnewtask])

}


  return (
    <div className='addTask'>
    <form >
    <label htmlFor="">Task</label>
    <input type="text" name='newtask' id='newtask' onChange={newTask} value={newtask}/>
    <button className='btn addtask' onClick={AddNewTask}>Add Task</button>
    <span className='btn cleartask' onClick={delTask}>Clear</span>
    </form>
        <h1>{newtask}</h1>

    </div>
  )
}
