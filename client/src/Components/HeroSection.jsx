import React from 'react'
import './CSS/HeroSection.css'
import videoBg from '../assets/background video.mp4'
export default function HeroSection() {
    return (
        <div style={{height:""}}>
            <div className="video-container">
                <video src={videoBg} autoPlay loop muted />
                <div className="overlay"></div>
                <div className="container-fluid text-overlay">
                    <h1 className='herohead'>Hire The Best Talent Across the Globe</h1>
                    <button href="#contact" className=" my-2 hero-cta">Hire Now</button>
                    <p className='mt-2'>Streamline Your Hiring Process:
                        At Hirex, We Make Hiring Effortless.
                        Save Time, Hire Smarter, and Focus on Growth</p>
                    <div className='col-6'>

                    </div>
                    <div className='col-6'>

                    </div>
                </div>
            </div>
        </div>
    )
}
