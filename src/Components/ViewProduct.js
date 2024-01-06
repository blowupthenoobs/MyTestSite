import React, { useEffect, useState } from 'react'

export default function ViewProduct() {

    var id=sessionStorage.getItem("productId")
    var [product, setProduct] = useState({})
    var [images, setImages]=useState([]);

    useEffect(()=>{
        async function getData(){
            var response = await fetch("https://dummyjson.com/products/"+id)
            var data = await response.json();
            console.log(data);
            setProduct(data)
            setImages(data.images)
        }

        getData();
    }, [id])

  return (
    <div>
      <center>
        <h1>{product.title}</h1>
        <p>Brand: {product.brand}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className='img-container'>
            {images.map((item)=>{
                return(
                    <img src = {item} alt='product'/>
                )
            })}
        </div>
      </center>
    </div>
  )
}
