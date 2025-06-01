import { logoURL } from "../constants/cloudId";  //named import
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const[btnName, setBtnName] = useState('Login');
    return(
        <div className='header'>
          <div className='logo-cont'>
            <img className="logo" alt="logo" src={logoURL}></img>
          </div>
          <div className='nav-items'>
            <ul>
                <li><Link to="/" className="card-link">Home</Link></li>
                <li><Link to="/about" className="card-link">About</Link></li>
                <li><Link to="/contact" className="card-link">Contact</Link></li>
                <li><Link to="/cart" className="card-link">Cart</Link></li>

                <button className="btn-header" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>
                  {btnName}
                </button>
            </ul>
          </div>
        </div>
    )
}

export default Header;