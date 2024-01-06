import React, {useEffect, useState} from 'react'


export default function Tasks() {

    var [Todos, setTask] = useState([])

    useEffect(()=>{
        async function getData(){
            var response=await fetch("https://dummyjson.com/todos")
            var data = await response.json();
            console.log(data.todos)
            setTask(data.todos)
        }
        getData();
    }, [])

  return (
    <div>
      <div className='tasks'>
        {Todos.map((item)=>{
            return(
                <div className='todo'>
                    <h2>{item.todo}</h2>
                </div>
            )
        })}
      </div>
    </div>
  )
}
