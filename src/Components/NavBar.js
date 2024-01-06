import React from "react";
import {Link} from "react-router-dom";

function NavBar(){
    return(
        <>
            <nav>
                <Link to="/" className="links">Home</Link>
                <Link to="/about" className="links">About</Link>
                <Link to="/contact" className="links">Contact Us</Link>
                <Link to="/quotes" className="links">Quotes</Link>
                <Link to="/product" className="links">Products</Link>
                <Link to="/users" className="links">Users</Link>
                <Link to="/todos" className="links">ToDos</Link>
                <Link to="/cart" className="links">Cart</Link>
                <Link to="/videos" className="links">Videos</Link>
            </nav>
        </>
    )
}

export default NavBar;