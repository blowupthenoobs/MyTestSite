import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Product() {

    var [products, setProducts] = useState([])
    var navigate=useNavigate();

    useEffect(()=>{
        async function getData(){
        var response=await fetch("https://dummyjson.com/products")
        console.log(response)
        var data=await response.json();
        console.log(data.products)
        setProducts(data.products)
        }

        getData()
    }, [])

    function getId(id){
      sessionStorage.setItem("productId", id);
      navigate("/viewProduct")
    }

    
  return (
    <div className='all-products'>
      {products.map((item)=>{
        return(
            <div className='products' onClick={()=> getId(item.id)}>
                <h1>{item.title}</h1>
                <h2>{item.brand}</h2>
                <img src={item.thumbnail} alt="item"/>
                <h2>${item.price}</h2>
            </div>
        )
      })}
    </div>
  )
}
