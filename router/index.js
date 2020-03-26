const express = require('express')
const app = express()
const checkdata = require('../handle')


app.post('/checkstd',async(req,res)=>{
    try{var checkstd_id = await new checkdata().checkStudent(req.body);
        res.json(checkstd_id);}
    catch(error){
        res.send(error)
    }
})

app.post('/count',async(req,res)=>{
    try{var count_status = await new checkdata().countnum(req.body);
        res.json(count_status);}
    catch(error){
        res.send(error)
    }
})
module.exports = app