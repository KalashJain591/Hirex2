import React from 'react'
import './CSS/Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
                <div className="container-fluid">

                    <img src='/logo512.png' className="m-2" style={{ height: "50px", width: "50px", }} />
                    <h2 className='company mx-2'>Hirex</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">

                        <div className="navbar-nav mx-auto" style={{ fontSize: "2rem" }}>
                            <p><a className="nav-item nav-link active mx-2" href="#" aria-current="page">Home</a></p>
                            <p><a className="nav-item nav-link mx-2" href="#">Product</a></p>
                            <p><a className="nav-item nav-link mx-2" href="#">Features</a></p>
                            <p><a className="nav-item nav-link mx-2" href="#">Pricing</a></p>
                        </div>
                        
                        <button className="sign-button m-2">Sign In</button>
                        <button className="register-button m-2">Register</button>

                    </div>


                </div>
            </nav>
        </div>
    )
}
