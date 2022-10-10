import React from 'react'
import ImgNav from '../Images/Fill 213.png'

export default function Navbar () {
    return (
        <nav className="navbar">
            <div className="navbar-text">
                <img src={ImgNav}></img>
                <span>my travel journal.</span>
            </div>

        </nav>
    )
}