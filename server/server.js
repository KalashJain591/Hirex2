const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const authRoute =require('./routes/authRoute');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
// const  config  = require("config");
const PORT = process.env.PORT || 5000;
app.use(express.json())
const cookieParser = require("cookie-parser")
const cookieSession=require("cookie-session");
dotenv.config();
app.use(cors({
    origin: [
        "http://localhost:5000",
        "http://localhost:3000",
    ],
    credentials: true,
})
);

app.use(cookieParser());

// app.use(cookieSession({
//   name:"session",
//   keys:["kalash"],
//   maxAge:24*60*69*100,
// }))
app.use('/users', userRoutes);
mongoose.connect(process.env.MONGO_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server Listening on Port ${PORT}`);
    }))
    .catch(err => console.log(err));
    
app.get('/', (req, res) => {
    res.send('Server Activated');
})

// app.use('/auth',authRoute);


