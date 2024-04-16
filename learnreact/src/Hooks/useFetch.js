import React, { useEffect, useState } from 'react'

export  function useFetch(url) {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
          const fetchdata=async()=> {
            setLoading(true);
            const response = await fetch(url);
            console.log(response);
            const result= await response.json();
            console.log(data);
            setLoading(false);
            setData(result);
        }
        fetchdata();
    },[url])
  return {data,loading}
}
