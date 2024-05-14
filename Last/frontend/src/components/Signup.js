import React, { useState } from 'react'

export default function Signup() {
    const [formdata, setFormData] = useState({
        username: '',
        password: ''
    })
    async function handlesave(e) {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/signup')
            console.log(response)
            const data = await response.json();
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }
        try {
            const response = await fetch('http://localhost:4000/signup',{
                method:'POST',
                body:JSON.stringify(formdata),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log(response)
            const data = await response.json();
            console.log(data)
        }
        catch (error) {
            console.log(error)
        }



    }

async function handlelogin(e){
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        const data = await response.json();
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }



}



    function handleinput(e) {

        setFormData(formdata => (
            {
                ...formdata, [e.target.name]: e.target.value
            }

        ))

    }
    console.log(formdata);


    return (
        <div>
            <form action="" onSubmit={handlesave}>
                <input type="text" name="username" onChange={handleinput} />
                <input type="password" name="password" onChange={handleinput} />
                <button type='submit'>Save</button>
            </form>


            <form action="" onSubmit={handlelogin}>
                <input type="text" name="username" onChange={handleinput} />
                <input type="password" name="password" onChange={handleinput} />
                <button type='submit'>login</button>
            </form>
        </div>
    )
}
