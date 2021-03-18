const express = require('express')
const app = express()
const checkdata = require('../handle') //เรียกหา controller

//index เป็นเหมือนที่คั่นหนังสือ เป็นตัวที่บอกว่า fn นี้ไปเรียก controller class ไหนทำงาน

app.post('/checkstd',async(req,res)=>{  //เรียก path checkstd (ชื่อpathต้องตรงกับที่เชื่อมไปswagger)
    try{var checkstd_id = await new checkdata().checkStudent(req.body); //เรียน fn checkStudent จาก file handle
        res.json(checkstd_id);} //res -> ค่าที่ออกมาหลังจากทำ fn นั้นๆเสร็จ
    catch(error){ 
        res.send(error)  //ถ้า fn มันerrorจะเข้าบรรทัดนี้
    }
})

app.post('/count',async(req,res)=>{
    try{var count_status = await new checkdata().countnum(req.body);
        res.json(count_status);}
    catch(error){
        res.send(error)
    }
})
module.exports = app  //ต้องมีเพื่อสั่งให้ app -> เป็น default ของ express มั้ง