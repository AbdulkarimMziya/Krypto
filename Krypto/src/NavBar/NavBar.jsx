import React from 'react'
import './navbar.scss'

const NavBar = () => {

  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="nav-container">
                <h1>Krypto</h1>
                <div className="nav-items">
                    <a href='#'>about</a>
                    <a href='#'>pricing</a>
                    <a href='#'>contacts</a>
                    <a href='#'>buy nfts</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
