import React, {useEffect} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export default function EditUser()
{
    const location = useLocation();
    const id = location.state.id;
    var navigate = useNavigate();

    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/users/"+id);
            const data = await response.json();
            console.log(data);

            document.getElementById("userName").value = data.name;
            document.getElementById("age").value = data.age;
            document.getElementById("gender").value = data.gender;
        }

        getData();
    }, [id])

    function editInfo(){
        const name = document.getElementById("userName").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;

        const payload = {
            name,
            age,
            gender
        }

        axios.patch("http://localhost:8080/users/"+id, payload).then(()=>{
            NotificationManager.success("Data Updated!")
            navigate("/viewUser", {state: {userId: id}});
        }).catch((e)=>{
            NotificationManager.error("something went wrong")
            console.log(e);
        })
    }

    function deleteUser()
    {
        axios.delete("http://localhost:8080/users/"+id).then(()=>{
            NotificationManager.success("User Deleted");
            navigate("/users");
        }).catch((e)=>{
            NotificationManager.error("Something Went Wrong");
            console.log(e);
        })
    }

    return(
        <div className='form'>
            <NotificationContainer/>
            <h1>Edit User</h1>
            <input type='text' id='userName' placeholder='Name:'/>
            <br/><br/>
            <input type='number' id='age' placeholder='Age:'/>
            <br/><br/>
            <input type='text' id='gender' placeholder='Gender'/>
            <br/><br/>
            {/* <input type='file' name='file' id='file' accept='image/*' onChange={readFile} width={200} height={200}/> */}

            <div className='sameLineDiv'>
                <button onClick={editInfo}>Publish Changes</button>
                <button onClick={deleteUser}>Delete User</button>
            </div>
            
    </div>
    )
}