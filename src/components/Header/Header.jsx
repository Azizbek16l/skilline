import './Header.css'

function Header() {
  return (
    <header>
        <div className="container">
        <h2 id='logo'>Skilline</h2>  
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#" id='login'>Login</a></li>
            <li><a href="#" id='signup'>Sign up</a></li>
        </ul>
        </div>
    </header>
  )
}

export default Header