const express = require('express')

const app = express()

app.get('/',(req,res) => {
  res.send("hello world")
})
//test bugfix add
app.listen(3000,() =>{
  console.log("App is listening on 3000");
})
