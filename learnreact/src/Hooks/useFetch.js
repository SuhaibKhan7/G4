import React, {useEffect, useState } from 'react'

export function useFetch(url) {

 const[data,setData]=useState(null);
  const [loading,setLoading]=useState(false)
      useEffect(() => {
          async function getdata() {
            setLoading(true);
              let response = await fetch(url)
              let result = await response.json();
              setData(result)
              setLoading(false);
          }
          getdata();
      },[url])
    console.log(data);
      return {data,loading}
}
