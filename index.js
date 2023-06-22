const express = require('express')
const cors = require('cors');
const chefs = require('./data/database.json')
const app  =  express();
const port = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('my home page is comming soon')
})
app.get('/chefs',(req, res)=>{
    res.send(chefs)
})
app.get('/chefs/:id',(req,res)=>{
    id = parseInt(req.params.id)
    console.log(id)
    // const chef = chefs.find(chef=>parseInt(chef.id) == id || {})
    const chef = chefs.find(chef=>chef.id==id)
    // console.log(chef)
    res.send(chef)
})
app.get('/chefs/:id/recipes',(req,res)=>{
    id = parseInt(req.params.id)
    console.log(id)
    // const chef = chefs.find(chef=>parseInt(chef.id) == id || {})
    const chef = chefs.find(chef=>chef.id==id)
    // console.log(chef)
    res.send(chef.recipes)
})



app.listen(port,()=>{
    console.log('')
})
