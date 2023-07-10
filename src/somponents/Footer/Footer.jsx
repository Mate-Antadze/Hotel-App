import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer className='f-wrapper'>
        <div className="paddings innerWidth flexCenter f-container">
            <div className="f-left flexColStart">
                <img src="./logo2.png" alt="" />
                <span className='secondaryText'>Our vision is to make all people <br /> the best place to life for them</span>

            </div>
            <div className="f-right flexColStart">
                <span className='primaryText'>Information</span>
                <span>6353 Juan Taboo, AP 6</span>

                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer