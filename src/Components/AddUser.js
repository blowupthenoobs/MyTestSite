import React from 'react'
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function AddUser() {

    function addData(){
        var name = document.getElementById("userName").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;

        var payload = {
            name,
            age,
            gender
        }

        axios.post("http://localhost:8080/users", payload).then(()=>{
            NotificationManager.success("User Added!");
        }).catch((e)=>{
            NotificationManager.error("Something went wrong!")
            console.log(e);
        });
    }
  return (
    <div className='form'>
      <NotificationContainer/>
      <h1>New User?</h1>
      <input type='text' id='userName' placeholder='Name:'/>
      <br/><br/>
      <input type='number' id='age' placeholder='Age:'/>
      <br/><br/>
      <input type='text' id='gender' placeholder='Gender'/>
      <br/><br/>
      <button onClick={addData}>Add User</button>
    </div>
  )
}
