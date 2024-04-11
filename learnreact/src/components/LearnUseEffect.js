import React, { useEffect, useState } from 'react'

export default function LearnUseEffect() {
const [counter,setCounter]=useState(0)
useEffect( ()=>{

console.log('Mount')
}, [counter])


  return (
    <div>

<h1>counter: {counter}</h1>
<button className='btn btn-danger' onClick={()=>setCounter(counter+1)}>Inc</button>

    </div>
  )
}
