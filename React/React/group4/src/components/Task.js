import React from 'react'
import {useState} from 'react'

import '../App.css'
export default function Task() {
const[tasks,setTask]=useState([
    {id:1,name:"This is task 1",complete:true},
    {id:2,name:"This is task 2",complete:false},
    {id:3,name:"This is task 3",complete:true},
])
function taskdelete(id)
{
setTask(tasks.filter((t)=>t.id!=id))
}
const [show,setShow]=useState(true)
function showhide()
{
    setShow(!show)
}


return(

<div className="TaskApp">

    <h1>Task-List   <button className='btn' onClick={showhide}>Show/Hide</button>    </h1>
   
    <ul>
{show && tasks.map((task)=>

<li key={task.id}>{task.id}--------{task.name}

<button onClick={()=>taskdelete(task.id)} className='btn deletebtn'>Delete</button>

</li>    )}

    </ul>
</div>


)

 
}
