const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var sql = require("mssql");
var config = {
    user: 'sa',
    password: 'P@d0rU123',
    server: '167.71.200.91',
    database: 'Padoru'
};
// connect to your database
var err = sql.connect(config)
if (err) console.log(err);
app.use(bodyParser.json());

class Student {
    async checkStudent(req){
      //  let functionName = '[checkStudent]'
  return new Promise(async function (resolve, reject) {
     try {
        var request = new sql.Request();
        var message = ""
        var query_id =`SELECT status FROM farDB.dbo.STUDENT_ID WHERE id = '${req.id}' AND password = '${req.password}'`
        var result = await request.query(query_id)
        //console.log(query_id)
        console.log(result.recordset[0].status)
            if(result.recordset[0] == undefined){
                message = 'dont have this id or wrong password'
        }
            else if ( result.recordset[0].status == "E"){
                console.log(result.recordset[0])
                message =  "correct welcome to login and your status is exit" 
        }
            else 
              { message =  "correct welcome to login and your status is working"}
              resolve(message)
    }
     catch (err) {
        let messageError = "something wrong"
        reject(messageError)
     }
    })
}

  async countnum(req){
    return new Promise(async function (resolve, reject) {
        try {
            var request = new sql.Request();
            var message = ""
            var total = `SELECT COUNT(*) as totalW FROM farDB.dbo.STUDENT_ID WHERE status = 'W' `
            var result = await request.query(total)
            console.log(result.recordset[0].totalW)
            message = result.recordset[0].totalW
            resolve(message)
        }
        catch (err) {
            let messageError = "something wrong"
            reject(messageError)
        }

  })
}
}

module.exports = Student;