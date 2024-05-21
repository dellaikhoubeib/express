const express = require('express');


const app = express();
const port=5000
const date = require('./midel/date')

app.get('home',(rec,res)=>{
    res.sendFile(__dirname+'/public/homepage.html')
})
app.get('servise',date,(rec,res)=>{
    res.sendFile(__dirname+'/public/servise.html')
})





app.listen(port,err =>{
    err?console.log(err):console.log('you did good go to the port 4000 {port}'+port)


})