import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import React from 'react'
import{useState} from 'react'



export default function App() {
 
  return (
    <>
    <Header/>
   <HandleTask/>
    <Footer/>
  
    </>
  )



  function HandleTask()
      {
        const[tasks,setTask]=useState([
          {id:1,name:"This is task 1",complete:true},
          {id:2,name:"This is task 2",complete:false},
          {id:3,name:"This is task 3",complete:true},
      ])
        return(
          <>
          <AddTask tasks={tasks} setTask ={setTask} />
          <Task tasks={tasks} setTask ={setTask}/>
          </>
        )


  }






}

