import { logoURL } from "../constants/cloudId";  //named import

const Header = () => {
    return(
        <div className='header'>
          <div className='logo-cont'>
            <img className="logo" alt="logo" src={logoURL}></img>
          </div>
          <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
          </div>
        </div>
    )
}

export default Header;