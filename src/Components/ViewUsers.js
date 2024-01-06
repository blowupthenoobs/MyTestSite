import React, { useEffect, useState } from 'react'

export default function ViewUsers() {

    var id=sessionStorage.getItem("userId")
    var [user, setUser] = useState({})
    var [company, setCompany] = useState({});

    useEffect(()=>{

        async function getData(){
        var response = await fetch("https://dummyjson.com/users/"+id)
        var data = await response.json()
        console.log(data)
        setUser(data);
        setCompany(data.company);
        }

        getData();
    }, [id])
    

  return (
    <div className="userDetails">
        <div className='personal-info'>
            <h1>Personal Info</h1>
            <img src={user.image} alt='user' width={350}/>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Weight: {user.weight} lbs</p>
        </div>

        <div className='professional-info'>
            <h1>Professional Info</h1>
            <h2>Company: {company.title}</h2>
            {/* <p>Address: {company.address.city}, {company.address.address}</p> */}
            <p>Department: {company.department}</p>
        </div>
      
    </div>
  )
}
