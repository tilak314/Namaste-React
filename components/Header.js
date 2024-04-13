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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
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