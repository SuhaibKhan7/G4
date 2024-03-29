import React from 'react'
import {useState} from 'react'
import './AddTask.css'
export default function AddTask() {
const[newtask,setnewTask]=useState('')
function newTask(event)
{
   setnewTask(event.target.value)
}
function delTask()
{
    setnewTask('')
}
  return (
    <div className='addTask'>
    <form >
    <label htmlFor="">Task</label>
    <input type="text" name='newtask' id='newtask' onChange={newTask} value={newtask}/>
    <button className='btn addtask'>Add Task</button>
    <span className='btn cleartask' onClick={delTask}>Clear</span>
    </form>
        <h1>{newtask}</h1>

    </div>
  )
}
