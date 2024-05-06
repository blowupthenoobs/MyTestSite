import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import editIcon from "../Images/editIcon.png";

export default function ViewEmployee() {
    const location = useLocation();

    const id = location.state.id;

    console.log(id);

    return(
        <div className='employee-details'>
            
        </div>
    )
}