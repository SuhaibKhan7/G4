import React, {useEffect, useState } from 'react'

export function useFetch(url) {

 const[data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
      useEffect(() => {
        const fetchdata=async ()=>
        {
            setLoading(true); 
              let response = await fetch(url)
              let result = await response.json();
              {setData(result)
              setLoading(false);
              }
          }
          fetchdata();
      },[url])



    console.log(data);
      return {data,loading}
}
