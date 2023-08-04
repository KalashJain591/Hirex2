const express=require('express');
const app=express();
const PORT= 8001;



app.get('/',(req,res)=>{
    res.send('Server Activated');
})

app.listen(PORT,()=>{
    console.log(`Server Listening on Port ${PORT}`);
})


