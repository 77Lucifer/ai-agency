import React from 'react'
import './Style/Nav.css'
import './Style/Topbanner.css'
import logo from '../images/exlogo.png'
import redai from '../images/redai.png'


const Topbanner = () => {
    return (
        <>
            <div className="topb-main">
                <nav>
                    <div className="nav-l">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-r">
                        <span>Home</span>
                        <span>About</span>
                        <span>Services</span>
                        <span>Plans</span>
                    </div>
                </nav>
{/* top  bannner */}
                <div className="topb-container">
                    <div className="top-heading-l">
                        <h1>WELCOME TO OUR AI AGENCY</h1>
                         <p>Revolutionize your systems with Money with AI. Our advanced solutions breathe life into operations, empowering your organization to thrive in today's dynamic landscape.</p>   
                         <button className="btn">Let's Go</button>
                    </div>
                    <div className="top-heading-r">
                        {/* <img src={redai} alt="" />    */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbanner
