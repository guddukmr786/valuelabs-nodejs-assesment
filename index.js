const express = require('express')
const app = express();

app.get('/:num1/:num2',(req,res)=>{
  const [num1,num2] = req.body;
  let result = num1 + num2;
  return res.send(result)
})

app.listen('4000',()=>{
  console.log("welcome to node js");
});


