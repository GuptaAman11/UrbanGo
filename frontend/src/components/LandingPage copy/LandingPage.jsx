import React from 'react'
import './page.css'
const LandingPage = () => {
  return (
    <div className='landing-page-container'>
        <div className="p-container">
            <div className="p-main-container">
                <div className="first-container">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <div className="p-first-text">
                        <div className="p-text">
                            <label htmlFor="abc"> Enjoy a luxury</label>
                            <label htmlFor="ab">Experience</label>
                        </div>

                        <button>Book Now</button>
                    </div>
                    <div className="p-boxes">
                        <div className="box">
                            <label htmlFor="box1">Location</label>
                        </div>
                        <div className="box">
                            <label htmlFor="box2">checkIn</label>
                        </div>
                        <div className="box">
                            <label htmlFor="box3">Checkout</label>
                        </div>
                        <div className="box">
                            <label htmlFor="box4">Guest</label>
                        </div>
                        <button>Search</button>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default LandingPage