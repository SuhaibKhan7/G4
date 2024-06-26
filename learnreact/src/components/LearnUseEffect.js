import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
export default function LearnUseEffect() {

  const [counter, setCounter] = useState(0)
  let [url, setUrl] = useState('http://localhost:3004/products')
  let {data,error,loading} = useFetch(url);
  
  return (
    <div>
      <h1>counter: {counter}</h1>
      <button className='btn btn-danger' onClick={() => setCounter(counter + 1)}>Inc</button>
      <h1>printing JSON File</h1>

      <h1>{error}</h1>
      {console.log(loading)}
  {loading && <h4> Data is loading</h4>}
      <button className='bg-primary' onClick={() => setUrl('http://localhost:3004/products?instock=true')} >Instock</button>
      <button className='bg-danger' onClick={() => setUrl('http://localhost:3004/products?instock=false')}>OutOfstock</button>
      <div className='bg-success text-white p-3 ' >
        {data && data.map((c) => {
          return <li key={c.id}>{c.id}----{c.pname}---{c.Price}---<span className={JSON.parse(c.instock) ? 'bg-primary' : 'bg-danger'}> {JSON.parse(c.instock) ? "Instock" : "Outofstock"}</span></li>
        })}
      </div>
    </div>
  )
}
