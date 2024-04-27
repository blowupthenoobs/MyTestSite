import React, {useState} from 'react'
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {

  const [image, setImage] = useState("");
  const navigate = useNavigate();

    function addData(){
        var name = document.getElementById("userName").value;
        var age = document.getElementById("age").value;
        var gender = document.getElementById("gender").value;
        var payload = {};
        
        if(image === "") {
          payload = {
            name,
            age,
            gender
          };
        } else {
          var payload = {
            name,
            age,
            gender,
            pfp:image
          }
        }
        

        axios.post("http://localhost:8080/users", payload).then(()=>{
            NotificationManager.success("User Added!");
            setTimeout(()=>{
              navigate("/users");
            }, 1500)
        }).catch((e)=>{
            NotificationManager.error("Something went wrong!")
            console.log(e);
        });
    }

    function readFile(e) {
      let files = e.target.files;
      for (let i = 0; i < files.length; i++) {
        (function (file) {
          var reader = new FileReader();
          reader.onload = () => {
              console.log(reader.result);
              setImage(reader.result);
          };
          reader.readAsDataURL(file);
        })(files[i]);
      }
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
      {image !== ""?
      <>
        <img src={image} alt="user"/>
      </>: null}
      <br/>
      <input type='file' name='file' id='file' accept='image/*' onChange={readFile} width={200} height={200}/>

      

      
      <button onClick={addData}>Add User</button>
    </div>
  )
}
