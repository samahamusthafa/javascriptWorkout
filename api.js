// const express = require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     res.send('home')
// })

// app.listen(7000,()=>console.log("server started"))

const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})

app.listen(7000,()=>console.log("server started"))