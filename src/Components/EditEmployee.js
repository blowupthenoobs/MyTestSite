import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';

export default function EditEmployee()
{
    const location = useLocation();
    const id = location.state.id;
    var navigate = useNavigate();


    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/employees/"+id);
            const data = await response.json();
            console.log(data);

            document.getElementById("userName").value = data.name;
            document.getElementById("age").value = data.age;
            document.getElementById("gender").value = data.gender;
            document.getElementById("position").value = data.position;
            document.getElementById("number").value = data.number;
            document.getElementById("password").value = data.password;
        }

        getData();
    }, [id])

    function editInfo(){
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

        axios.patch("http://localhost:8080/employees/"+id, payload).then(()=>{
            NotificationManager.success("Data Updated!")
            navigate("/viewEmployee", {state: {id: id}});
        }).catch((e)=>{
            NotificationManager.error("something went wrong")
            console.log(e);
        })
    }

    function deleteUser()
    {
        axios.delete("http://localhost:8080/employees/"+id).then(()=>{
            console.log("deleted User")
            NotificationManager.success("Employee Deleted");
            navigate("/employees");
        }).catch((e)=>{
            NotificationManager.error("Something Went Wrong");
            console.log(e);
        })
    }

    return(
        <div className='form'>
            <h2>Edit Employee</h2>
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
            <div className='sameLineDiv'>
                <button onClick={editInfo}>Set Changes</button>
                <button onClick={deleteUser}>Delete Employee</button>
            </div>
        </div>
    )
    
    
}