
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Login from "./Components/Login";
import Register from "./Components/Register";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const usercontext=createContext()
// const clientId="424872902034-5ucvbjj2lrdqukv6925ja9m3et2q6rsr.apps.googleusercontent.com"


// import './App.css';

function App() {
const [isAuth, setAuth]=useState(false);

  
  return (
    <>
    <usercontext.Provider value={{isAuth}} >
   
       <BrowserRouter>
      <Navbar setAuth={setAuth}/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login  setAuth={setAuth}/>} />
        <Route path='/register'  element={<Register setAuth={setAuth}/>} />
      </Routes>
      </BrowserRouter>
   
      </usercontext.Provider>
    </>
  );
}

export default App;
