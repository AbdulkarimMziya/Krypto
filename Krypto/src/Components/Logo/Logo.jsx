import React from 'react'
import './logo.scss'
const Logo = () => {
  return (
    <div className='logo'>
        <div className="wrapper">
            <h2 className="subheading">Featured On</h2>

            <div className="logo-container">
            <img src="logo-1.png" alt="logo#1" />
                <img src="logo-2.png" alt="logo#2" />
                <img src="logo-3.png" alt="logo#3" />
                <img src="logo-4.png" alt="logo#4" />
            </div>

        </div>
    </div>
  )
}

export default Logo
