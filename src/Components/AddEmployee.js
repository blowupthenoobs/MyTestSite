import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';

export default function AddEmployee()
{
    var navigate = useNavigate();

    useEffect(()=>{
        async function getData(){
            
        }

        getData();
    }, [])

    function AddData(){
        var name = document.getElementById("userName").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var position = document.getElementById("position").value;
        var number = document.getElementById("number").value;
        var password = document.getElementById("password").value;

        var payload = {
            name,
            age,
            gender,
            position,
            number,
            password
          };

        axios.post("http://localhost:8080/employees", payload).then(()=>{
            NotificationManager.success("User Added!");
            setTimeout(()=>{
              navigate("/employees");
            }, 1500)
        }).catch((e)=>{
            NotificationManager.error("Something went wrong!");
            console.log(e);
        });
    }

    return(
        <div className='form'>
            <h2>Add Employee</h2>
            <input type='text' id='userName' placeholder='Name:'/>
            <div className='sameLineDiv' width='75%'>
                <input type='number' id='age' placeholder='Age:'/>
                <br/>
                <input type='text' id='gender' placeholder='Gender'/>
            </div>
            <br/>
            <input type='text' id='position' placeholder='Position'/>
            <input type='text' id='number' placeholder='Phone Number'/>
            <br/>
            <input type='password' id='password' placeholder='password'/>
            <br/><br/>
                <button onClick={AddData}>Submit Employee</button>
        </div>
    )
    
    
}