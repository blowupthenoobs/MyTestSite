import React, {useState, useEffect} from 'react'

export default function Cart(){

    var [cart, setCart] = useState([]);

    useEffect(()=>{
        async function getData(){
            var response=await fetch("https://dummyjson.com/carts");
            var data=await response.json();
            console.log(data.carts);
            setCart(data.carts);
        }

        getData();
    }, [])

    

  return (
    <div>
      {cart.map((item)=>{
        return(
            <div className="Full_Cart">
                <div className="Other_Details">
                    <h1>Cart Info: </h1>
                    <p>total Price: {item.total}</p>
                    <p>Discounted Total: {item.discountedTotal}</p>
                    <p>Total Quantity: {item.totalQuantity}</p>
                </div>
                
                {item.products.map((item)=>{
                    return(
                        <div className="Cart_Contents">
                            <h2>{item.title}</h2>
                            <p>Price: {item.price}</p>
                            <p>Quantity Ordered: {item.quantity}</p>
                            <p>Total Bill: ${item.total}</p>
                        </div>
                    )
                })}
            </div>
        )
      })}
    </div>
  )
}
