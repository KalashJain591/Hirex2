import React from 'react'
import comma from '../assets/comma.png';
import './CSS/Review.css'
export default function Review() {
    return (
        <div>
            <div className='container-fluid'>
                <h1 className='text-center Reviewhead' >What Our User Say</h1>
                <div className='d-flex flex-wrap justify-content-evenly' style={{ fontSize: "2rem" }}>
                    <div className='m-4 col-lg-5 col-10 component' >
                        <img src={comma} height="30px" width="30px"></img>
                        <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO. </p>
                    </div>
                    <div className='m-4 col-lg-5 col-10 component'>
                        <img src={comma} height="30px" width="30px"></img>
                        <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO. </p>
                    </div>
                    <div className='m-4 col-lg-5 col-10 component'>
                    
                        <img src={comma} height="30px" width="30px"></img>
                        <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO. </p>
                    </div>
                    <div className='m-4 col-lg-5 col-10 component'
                    >
                        <img src={comma} height="30px" width="30px"></img>
                        <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO. </p>
                    </div>
                    <div className='m-4 col-lg-5 col-10 component'>
                    
                        <img src={comma} height="30px" width="30px"></img>
                        <p>I got my tech job on Wellfound (AngelList Talent) 4 years ago and I'm still happy! Pays well, great culture, and unlimited PTO. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
