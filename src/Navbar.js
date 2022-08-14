import { Link } from "react-router-dom";
import React from "react";


const Navbar = () => {
    return (
      
        <div className="menu">
          <Link className="nav-link active" to="/Closet">Home</Link>
          <Link className="nav-link active" to="/Allproducts">Allproducts</Link>
          <Link className="nav-link active" to="/Collection">Collection</Link>
                  
        </div>
     
    );
  }
   
  export default Navbar;