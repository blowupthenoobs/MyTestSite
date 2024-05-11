import React, {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import 'react-notifications/lib/notifications.css';

export default function EditUser()
{
    const location = useLocation();
    const id = location.state.id;
    var navigate = useNavigate();
    const [employeePassword, setPassword] = useState({});

    var hasPassword = false;


    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/employees/"+id);
            const data = await response.json();
            console.log(data.password);
            setPassword(data.password);
        }

        getData();
    }, [id])

    function VerifyPasscode()
    {
        var password = document.getElementById("password").value;

        if(password === employeePassword){
            hasPassword = true;

            navigate("/editEmployee", {state:{id: id}});
        }

    }

 


    if(!hasPassword){
        return(
            <div className='form'>
                <div className='center-form'>
                    <h3>Please Enter your Password</h3>
                    <input type="password" id="password" placeholder="password" required></input>
                    <br/><br/>
                    <button onClick={VerifyPasscode}>Submit</button>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className='form'>

            </div>
        )
    }
    
    
}