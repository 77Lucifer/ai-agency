import React from 'react'
import './Style/Nav.css'
import logo from '../images/exlogo.png'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav-l">
            <img src={logo} alt="" />
        </div>
        <div className="nav-r">
          <Link to='/'>  <span>Home</span></Link>
          <a href="/#about">  <span>About</span> </a>
           <a href="/#service"> <span>Services</span></a>
            <Link to='/Plans'><span>Plans</span> </Link>
            <Link to='/Contact'> <span>Conatact</span></Link>
        </div>
      </nav>
    </>
  )
}

export default Nav
