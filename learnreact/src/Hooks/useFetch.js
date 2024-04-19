import React, { useState, useEffect } from 'react'

export function useFetch(url) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {

        const getdata = async () => {
            try {
                let response = await fetch(url)
                console.log(response)
                if (!response.ok) {
                    throw new Error(`Failed to Fetch Data  ${response.status}`)
                }
                let result = await response.json()
                {
                    setData(result);
                }
            }
            catch (err) {
                setError(err.message)


            }



        }


        getdata();



        
    }, [])

    return {data,error};
}
