import {React,useState,useRef} from 'react'
import './AddTask.css'
export default function AddTask({tasks,setTask}) {
console.log('Add Task')
  
// const[newtask,setnewTask]=useState('')
const vref=useRef();


function newTask(event)
{
  console.log('We are learning useRef');
  console.log(vref.current.value)
  //  setnewTask(event.target.value)
}
function delTask()
{
    // setnewTask('')
    vref.current.value=''
}
function AddNewTask(event)
{
  event.preventDefault()
  console.log('Adding Task')
const createnewtask={
  id:Math.floor(Math.random()*100),
  name:vref.current.value,
  completed:false
}
setTask([...tasks,createnewtask])

}


  return (
    <div className='addTask'>
  
    <form >
    <label htmlFor="">Task</label>
    <input type="text" name='newtask' id='newtask' onChange={newTask}  ref={vref}/>
    <button className='btn addtask' onClick={AddNewTask}>Add Task</button>
    <span className='btn cleartask' onClick={delTask}>Clear</span>
    </form>
       

    </div>
  )
}
