import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Users() {

    var [users, setUser] = useState([]);
    var navigate = useNavigate();

    useEffect(()=>{
        async function getData(){
        var response = await fetch("http://localhost:8080/users")
        var data = await response.json();
        console.log(data);
        setUser(data);
    }

        getData();
    }, [])
    
    // function getId(id){
    //   sessionStorage.setItem("userId", id);
    //   navigate("/viewUsers");
    // }
    

  return (
    <div>
      <br/>
      <div className='userHeading'>
        <h1>All Users</h1>
        <Link to="/addUser" className="addUserButton"> + Add User </Link>
      </div>
      <br/><br/>
      <div className='all-users'>
        {users.map((item)=>{
            return(
                // <div className='user' onClick={()=>getId(item.id)}>
                //     <h2>{item.firstName} {item.lastName}</h2>
                //     <img src={item.image} alt='user'/>
                //     <p>Age: {item.age}</p>
                //     <p>Email: {item.email}</p>

                // </div>

                <div className = 'user'>
                  <h2>{item.name}</h2>
                  <p>Age: {item.age}</p>
                  <p>Gender: {item.gender}</p>
                </div>
            )
        })}
      </div>
    </div>
  )
}
