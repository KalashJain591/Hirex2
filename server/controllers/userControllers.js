const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const User = require('../models/user');
const config = require('config');
const cookieParser = require("cookie-parser")
const cookieSession = require("cookie-session");
const loginController = async (req, res) => {
    // If login through Googlauth
    // if (req.body.googleAccessToken) {
    //     axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    //         headers: {
    //             "Authorization": `Bearer ${googleAccessToken}`
    //         }
    //     })
    //         .then(async res => {
    //             const name = res.data._json.name;
    //             const email = res.data._json.email;

    //             const userExist = await User.findOne({ email: email });
    //             if (userExist) {
    //                 return res.status(400).json({ message: "User don't Exists" });
    //             }
    //             else {
    //                 const token = jwt.sign({
    //                     email: userExist.email,
    //                     id: userExist._id
    //                 }, process.env.JWT_SECRET, { expiresIn: "4h" })

    //                 res.status(400).json({ result:userExist, token });

    //             }
    //         })
    //         .catch(err=>{
    //             res
    //             .status(400)
    //             .json({message: "Invalid access token!"})
    //         });
    // }
    // else {
    // form data is used 
    const { email, password } = req.body;
    console.log("somebody login try");
    console.log(email + " " + password);
    if (email === "" || password === "")
        return res.status(400).json({ message: "Invalid field!" });
    try {
        const userExist = await User.findOne({ email })

        if (!userExist)
            return res.json({ message: "User don't exist!" })
        console.log("reached after ");
        const isPasswordOk = await bcrypt.compare(password, userExist.password);

        if (!isPasswordOk)
            return res.status(400).json({ message: "Invalid credintials!" })

        const token = jwt.sign({
            email: userExist.email,
            id: userExist._id
        }, "JWT_SECRET", { expiresIn: "4h" })
        res.cookie('token', token)
        return res.json("Login Successful");
        // return res.status(200).json({result: userExist, token})


    } catch (err) {
        return res.status(500).json({ message: "Something went wrong!" })
    }
}

const registerController = async (req, res) => {
    // If google Authentication is used 
    // if (req.body.googleAccessToken) {
    //     const { googleAccessToken } = req.body;
    //     axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    //         headers: {
    //             "Authorization": `Bearer ${googleAccessToken}`
    //         }
    //     })
    //         .then(async res => {
    //             const name = res.data._json.name;
    //             const email = res.data._json.email;

    //             const userExist = await User.findOne({ email: email })
    //             if (userExist) {
    //                 return res.status(400).json({ message: "User already Exists" });
    //             }
    //             else {
    //                 const user = await User.create({ name, email });
    //                 const token = jwt.sign({
    //                     email: user.email,
    //                     id: user._id
    //                 }, config.get("JWT_SECRET"), { expiresIn: "4h" })

    //                 res.status(400).json({ result :user, token });

    //             }
    //         })
    //         .catch((err) => {
    //             res.status(400).json({ message: "Invalid access token!" });
    //         })

    // }
    // // if registration is through the normal form data .
    // else {
    const { username, email, password } = req.body;

    console.log("somebody register  try");
    console.log(email + " " + password + " " + username);
    try {


        if (email === "" || password === "")
            return res.status(400).json({ message: "Invalid field!" });

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.json({ message: "User already Exists" });
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 12)
            const user = User.create({ username, email, password: hashedPassword });
            console.log(user);
            const token = jwt.sign({
                email: user.email,
                name: user.username
            }, "JWT_SECRET", { expiresIn: "4h" })
            res.cookie('token', token)
            console.log(token);
            res.json("Registeration Successfull")
        }
    }
    catch (err) {
        res
            .status(500)
            .json({ message: "Something went wrong!" })
    }
}



const logoutController = async (req, res) => {
    res.clearCookie('token');
    res.json("Logout Succesfully");

}

module.exports = {
    loginController,
    registerController,
    logoutController
}