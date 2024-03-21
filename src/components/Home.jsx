import React from 'react'
// import './Style/Nav.css'
import './Style/Home.css'
import logo from '../../public/images/exlogo.png'
import redai from '../../public/images/redai.png'
import img2 from '../../public/images/aboutai.png'
import Nav from './Nav'


const Topbanner = () => {
    return (
        <>
            <div className="home-main">
                    <Nav/>
                <div className="topb-main">
                    {/* <nav>
                        <div className="nav-l">
                            <img src={logo} alt="" />
                        </div>
                        <div className="nav-r">
                            <span>Home</span>
                            <span>About</span>
                            <span>Services</span>
                            <span>Plans</span>
                            <span>Contact</span>
                        </div>
                    </nav> */}
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

                <div id='about' className="about-banner">
                    <h1><span>About</span> Us</h1>
                    <div className="about-container">
                        <div className="about-l">
                            <img src={img2} alt="" />
                        </div>
                        <div className="about-r">
                            <p>Welcome to Money with AI, where we specialize in cutting-edge AI solutions to empower businesses. Our mission is to optimize systems and drive results through AI technology.
                            </p>
                            <p>With expertise in AI algorithms, machine learning, and advanced analytics, we offer tailored services for efficiency, decision-making, and customer experiences. From predictive analytics to computer vision, we leverage AI to thrive in today's data-driven world.
                            </p>
                            <p>What sets us apart is our commitment to delivering exceptional value. We work collaboratively to develop customized AI solutions aligned with your goals. Whether you're a startup or an enterprise, Money with AI is your trusted partner for driving growth and innovation.</p>
                        </div>
                    </div>
                </div>

                <div id='service' className="services-banner">
                    <h1>Services</h1>
                    <div className="services-container">
                        <div className="services-card">
                            <img src="https://vegavid.com/blog/wp-content/uploads/2023/03/MicrosoftTeams-image-1-1-1440x720.jpg" alt="" />
                            <h3>ChatBot Devlopment</h3>
                            <p>Engage customers 24/7 with responsive chatbots, driving instant support and satisfaction. </p>
                        </div>
                        <div className="services-card">
                            <img src="https://securityintelligence.com/wp-content/uploads/2023/04/Automation-Software-Technology-Process-System-Business-concept..jpeg" alt="" />
                            <h3>Integrating Automation Workflow</h3>
                            <p>Unlock efficiency with AI-powered automation, ensuring accuracy in business processes.</p>
                        </div>
                        <div className="services-card">
                            <img src="https://vegavid.com/blog/wp-content/uploads/2023/03/MicrosoftTeams-image-1-1-1440x720.jpg" alt="" />
                            <h3>AI Training And Solution</h3>
                            <p>Stay competitive with the latest AI tools, driving higher sales and revenue growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbanner
