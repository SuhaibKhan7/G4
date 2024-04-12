import React, { useEffect, useState } from 'react'

export default function LearnUseEffect() {
  const [counter, setCounter] = useState(0)
  // useEffect(() => {

  //   console.log('Mount'+ counter)


  //   return () => {
  //     console.log("unmount"+ counter)
  //   }

  // },[counter])
 
  let [cardata, setcarddata] = useState([])
  fetch('http://localhost:3004/products')
    .then((res) => res.json())
    .then((data) => setcarddata(data)
    )

  return (
    <div>
      <h1>counter: {counter}</h1>
      <button className='btn btn-danger' onClick={() => setCounter(counter + 1)}>Inc</button>
      <h1>printing JSON File</h1>
    </div>
  )
}
