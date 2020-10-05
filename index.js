const express = require('express')

const app = express()

app.get('/',(req,res) => {
  res.send("hello world")
})

//hotfix

//test feature add
app.listen(5000,() =>{
  console.log("App is listening on 5000");
})
