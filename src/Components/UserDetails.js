import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import editIcon from "../Images/editIcon.png";

export default function UserDetails() {

    const location = useLocation();
    const navigate = useNavigate();

    const id = location.state.userId;

    const [user, setUser] = useState({});

    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/users/"+id);
            const data = await response.json();
            console.log(data);
            setUser(data);
        }

        getData();
    }, [id])

    function editUser(id)
    {
        navigate("/editUser", {state: {id: id}});
    }

    return (
        <div className='userContainer'>
            <img src={user.pfp} alt = 'user' width={500}/>
            <div className='sameLineDiv'>
                <h1>{user.name}</h1> <img src = {editIcon} alt = 'edit' onClick={()=> editUser(user._id)}/>
            </div>
            <p>{user.gender}</p>
            <p>Age: {user.age}</p>

        </div>
    )
}