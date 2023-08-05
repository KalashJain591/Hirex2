import React, { useState } from 'react'
import './CSS/Login.css'
import axios from 'axios'
// import { useGoogleLogin } from '@react-oauth/google';
import { Link, NavLink, useNavigate } from 'react-router-dom'
export default function Login(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const navigate = useNavigate();

    // const handleGoogleLoginSuccess = (tokenResponse) => {
    //     console.log("hello");
    //     const accessToken = tokenResponse.access_token;
    //     axios.post('users/login', {
    //         googleAccessToken: accessToken
    //     })
    //         .then((res) => {
    //             if (res.result) {
    //                 console.log("login Successfully");
    //             }
    //             else {
    //                 console.log("User don't Exist");
    //             }
    //         })
    //         .catch((err) => console.log(err))
    // }
    console.log((email + password));
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (password !== "" && email !== "") {
            axios.post('http://localhost:5000/users/login', { email, password })
                .then((res) => {
                    console.log(res.data);
                    if (res.data === "Login Successful"){
                        props.setAuth(true);
                        navigate('/home');}
                    else {
                        alert("Invalid Credentials")
                        console.log("User don't Exist");
                    }
                })
                .catch((err) => console.log(err))
        }

    }

    // const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});


    return (
        <div>
            <div class="container-fluid " style={{ background: "#262424" }}>
                <div class="row justify-content-center align-items-center text-center p-2">
                    <div class="  mt-5 col-sm-8 col-md-6 col-lg-4  p-3 mb-5 bg-white  " style={{ border: "1px solid #c87373", background: "cornsilk" }} >
                        <div class="pt-5 pb-5" style={{ border: "1px solid black" }}>
                            <img src='/logo512.png' className="m-2" style={{ height: "50px", width: "50px", }} />
                            <h2 className='text-center mx-2'>Hirex</h2>
                            <p class="text-center text-uppercase mt-3">Login</p>
                            <form class="form text-center" >
                                <div class="form-group input-group-md">
                                    <input type="email" class="form-control mt-2" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={e => { setEmail(e.target.value) }} />

                                </div>
                                <div class="form-group input-group-md">
                                    <input type="password" class="form-control mt-2" id="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />

                                </div>
                                <button class="btn btn-lg btn-block btn-primary mt-4" type="submit" onClick={handleOnSubmit}>
                                    Login
                                </button>
                                {/* <button onClick={() => login()}>
                                Sign in with Google
                            </button> */}
                            </form>
                        </div>
                        <NavLink to='/register' class="text-center d-block mt-2">  Create an account? </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}
