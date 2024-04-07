const Header = () => {
    return(
        <div className='header'>
          <div className='logo-cont'>
            <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4-aO_9Sh5b6Ja6DF-K5b1W3BH41Gozzs6w&s"></img>
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