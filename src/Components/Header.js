import React from "react";

function Header(props){

    //Can change id in same way that style can be varied
    return(
        <>
            <div id="header" style={{backgroundColor: props.color}}>
                <h1>{props.name} Page</h1>
            </div>
        </>
    )
}

export default Header;