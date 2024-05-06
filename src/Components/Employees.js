import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Users() {

  var [employees, setEmployee] = useState([]);
  var navigate = useNavigate();

  useEffect(()=>{
    async function getData(){
    var response = await fetch("http://localhost:8080/employees")
    var data = await response.json();
    // console.log(data);
    setEmployee(data);
}

    getData();
}, [])

  function getID(id){
    navigate("/viewEmployee", {state:{id: id}});
  }

  return (
    <div>
      <h1>Employees</h1>
      <div className='employee-container'>
          {employees.map((item)=>{
            return(
              <div className='employee' onClick={()=>getID(item._id)}>
                <div className='sameLineSpacedDiv'>
                  <h2>{item.name}</h2>
                  <h3>Age: {item.age}</h3>
                </div>
                
                <p>role: {item.position}</p>
                
                <br/>
                <h3>Contact info</h3>
                  <div>
                    <h5>Phone Number: {item.number}</h5>
                  </div>
              </div>
            )
          })

          }
      </div>
    </div>
  )
}
