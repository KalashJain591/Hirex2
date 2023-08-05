import React, { useContext, useState } from 'react'
// import './CSS/Login.css'

import axios from 'axios'
// import { useGoogleLogin } from '@react-oauth/google';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { usercontext } from '../App';



export default function Register(props) {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState();
    const {isAuth}=useContext(usercontext);
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (password !== "" && email !== "") {
            axios.post('http://localhost:5000/users/register', {username, email, password })
                .then((res) => {
                    console.log(res.data);
                    if (res.data === "Registeration Successfull"){
                        props.setAuth(true);
                        navigate('/home');}
                    if(res.data.message==="User already Exists")
                    alert("user already Exists")
                    
                })
                .catch((err) => console.log(err))
        }

    }
    console.log((email + password));
    return (
        <div>
            <div class="container-fluid " style={{ background: "#262424" }}>
                <div class="row justify-content-center align-items-center text-center p-2">
                    <div class="mt-5 col-sm-8 col-md-6 col-lg-4  p-3 mb-5 bg-white  " style={{ border: "1px solid #c87373", background: "cornsilk" }} >
                        <div class="pt-5 pb-5" style={{ border: "1px solid black" }}>
                            <img src='/logo512.png' className="m-2" style={{ height: "50px", width: "50px", }} />
                            <h2 className='text-center mx-2'>Hirex</h2>
                            <p class="text-center text-uppercase mt-3">Register</p>
                            <form class="form text-center" action="#" method="POST">
                                <div class="form-group input-group-md">
                                    <input type="text" class="form-control mt-2" id="email" aria-describedby="emailHelp" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} />

                                </div>
                                <div class="form-group input-group-md">
                                    <input type="email" class="form-control mt-2" id="email" aria-describedby="emailHelp" placeholder="Enter Email"
                                        onChange={e => setEmail(e.target.value)} />

                                </div>
                                <div class="form-group input-group-md">
                                    <input type="password" class="form-control mt-2" id="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

                                </div>
                                <button class="btn btn-lg btn-block  mt-4" type="submit" style={{ background: "#FFA500" }} onClick={handleOnSubmit}>
                                    Register
                                </button>

                            </form>
                        </div>
                        <NavLink to='/login' class="text-center d-block mt-2">  Already have an account? </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
