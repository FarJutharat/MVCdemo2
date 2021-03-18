//MVC ฟ้าเองฉบับ comment ให้สุดๆไปเล้ย
var express = require('express');
var app = express();  //express เป็น library คือตัวที่ไว้เชื่อเพื่อทำให้ api เป็นแบบ MVC
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express')
const swaggerDoc = require('./swagger/swagger.json')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = process.env.port || 5060;  //port ที่ run 
app.use('/', require('./router/index'));  //เชื่อมไปหา router
app.use('/',swaggerUi.serve,swaggerUi.setup(swaggerDoc)); //เชื่อมไปหา swagger -> หน้าต่าง UI
app.listen(port, function () {   //เรียกให้ api ทำงาน
    console.log('Starting node.js on port ' + port);
    console.log('[Swagger] http://localhost:' +port+'/')
});