import React from "react"
import cash from "../Images/cash grab.jpg"

//width can also use ""
function MainSection(){
    return(
        <>
            <div className="main-section">
                <h1>Welcome to my home page</h1>
                <p>This is the home page of my website</p>
                <img src={cash} alt="car" width={1000}/>
            </div>
        </>
    )
}

export default MainSection