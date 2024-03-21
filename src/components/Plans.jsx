import React from 'react'
import '../components/Style/Plans.css'
import Nav from './Nav'
import img3 from '../images/ai3.jpg'

function Plans() {
  return (
    <>
      <div className="Plan-main">
        <Nav/>
        <div className="plan-container">
            <h1>Increase revenue <br /> <span>With AI</span></h1>
            <p>Unleash the power  of Productivity for your Company: Save Money, Reduce Staff, and Boost Sales</p>
            <button className='btn'>Book a Demo Call</button> 
            {/* <img src={img3} alt="" /> */}
        </div>
      </div>
    </>
  )
}

export default Plans
