import React from 'react'

export default function EditUser()
{
    return(
        <div className='form'>
            <h1>Edit User</h1>
            <input type='text' id='userName' placeholder='Name:'/>
            <br/><br/>
            <input type='number' id='age' placeholder='Age:'/>
            <br/><br/>
            <input type='text' id='gender' placeholder='Gender'/>
            <br/><br/>
            {/* <input type='file' name='file' id='file' accept='image/*' onChange={readFile} width={200} height={200}/> */}

            <button>Publish Changes</button>
    </div>
    )
}