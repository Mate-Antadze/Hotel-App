import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav>
            <div className="n-wrapper">
                <div className="n-container flexCenter paddings innerWidth">
                    <div className="n-img">
                        <img src="./logo.png" alt="logo" width={100} />
                    </div>
                    <div className="a-menu flexCenter">
                        <a href="">Resodencies</a>
                        <a href="">Our place</a>
                        <a href="">Contact us</a>
                        <a href="">get started</a>
                        <div className="button">
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
