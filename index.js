const express = require('express')

const app = express()

app.get('/',(req,res) => {
  res.send("hello world")
})

app.listen(5000,() =>{
  console.log("App is listening on 5000");
})

//feature - change request
