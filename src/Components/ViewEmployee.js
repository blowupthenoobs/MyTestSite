import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import editIcon from "../Images/editIcon.png";


export default function ViewEmployee() {
    const location = useLocation();
    var navigate = useNavigate();

    const id = location.state.id;

    const [employee, setEmployee] = useState({});

    useEffect(()=>{
        async function getData(){
            const response = await fetch("http://localhost:8080/employees/"+id);
            const data = await response.json();
            console.log(data);
            setEmployee(data);
        }

        getData();
    }, [id])

    function editEmployee(){
        navigate("/employeePassword", {state:{id: id}});
    }

    return(
        <div className='employee-details'>
            <div className='sameLineSpacedDiv'>
                <div>
                    <h1>{employee.name}</h1>
                    <h3>{employee.gender}</h3>
                </div>

                <h2>Age: {employee.age}</h2>
            </div>

            <br/><br/>
            <div className='sameLineSpacedDiv'> 
                <h3>Role: {employee.position}</h3>
                <img src = {editIcon} alt = 'edit' width="30px"  onClick={editEmployee}/>
            </div>
        </div>
    )
}