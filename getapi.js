const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send("<h1>Am Samaha</h1>")
})

app.listen(2000,()=>{
    console.log('server is running')
})