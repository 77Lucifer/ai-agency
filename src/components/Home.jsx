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
                <div className='innerfc'>    <Nav/>
                <div className="topb-main">
                    {/* top  bannner */}
                    {/* <svg className='ltop-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4A83C8" fill-opacity="1" d="M0,256L30,245.3C60,235,120,213,180,192C240,171,300,149,360,138.7C420,128,480,128,540,138.7C600,149,660,171,720,176C780,181,840,171,900,192C960,213,1020,267,1080,293.3C1140,320,1200,320,1260,304C1320,288,1380,256,1410,240L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
                    <div className="topb-container">
                        <div className="top-heading-l">
                            <h1>WELCOME TO OUR <br /><span>AI AGENCY</span></h1>
                            <p>Revolutionize your systems with Money with AI. Our advanced solutions breathe life into operations, empowering your organization to thrive in today's dynamic landscape.</p>
                            <button className="btn">
                                <span>Let's Go</span>
                                <span>Let's Go</span>
                            </button>
                        </div>
                        <div className="top-heading-r">
                            {/* <div className=""></div> */}
                        </div>
                            <div className="svg-wave">
                            <svg className='cooler' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" #4A83C8" fill-opacity="1" d="M0,96L30,112C60,128,120,160,180,181.3C240,203,300,213,360,186.7C420,160,480,96,540,69.3C600,43,660,53,720,69.3C780,85,840,107,900,128C960,149,1020,171,1080,170.7C1140,171,1200,149,1260,144C1320,139,1380,149,1410,154.7L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                            <svg className='cooler2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#4A83C8" fill-opacity="1" d="M0,320L40,282.7C80,245,160,171,240,149.3C320,128,400,160,480,181.3C560,203,640,213,720,197.3C800,181,880,139,960,128C1040,117,1120,139,1200,154.7C1280,171,1360,181,1400,186.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

                             </div>
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
