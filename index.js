const express = require('express')

const app = express()

app.get('/',(req,res) => {
  res.send("hello world")
})

app.listen(3000,() =>{
  console.log("App is listening on 3000");
})


//feature - change request
//bugfix version - change file

