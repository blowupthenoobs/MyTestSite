import React from 'react'
import { useEffect, useState } from 'react';

export default function Quotes() {

  var [quotes, setQuotes]=useState([]);

  useEffect(()=>{
    async function getData(){
        var response = await fetch("https://dummyjson.com/quotes");
        console.log(response);
        var data= await response.json();
        console.log(data.quotes);
        setQuotes(data.quotes);
    }

    getData();
  }, [])


    

  return (
    <div>
      <h1>All Quotes</h1>
      {quotes.map((item)=>{
        return(
          <div>
            <h1>{item.author}</h1>
            <p>{item.quote}</p>
          </div>
        )
      })}
    </div>
  )
}
