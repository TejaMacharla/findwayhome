const express=require('express')
const hbs=require('hbs')
const path=require('path')
const mysql=require('mysql')
const viewPath=path.join(__dirname,'./views')
const publicDirectoryPath=path.join(__dirname,'./CSS')
const bodyParser=require('body-parser')

const app=express()
app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(publicDirectoryPath))
 const port=process.env.PORT||1234

//  // var mysql = require('mysql');
//  const { ok } = require("assert");
//  const e = require('express')
//  //const bodyParser = require('body-parser')
//      var con = mysql.createConnection({
//          connectionLimit: 20,
//          host: 'localhost',
//          port: 3306,
//          user: 'root',
//          password: 'mysql@123',
//          database: 'findwayhome',
//          multipleStatements: true
//      });
//      con.connect(function (err) {
//          if (err) {
//              console.log('error occured while connecting :' + err);
//          } else {
//              console.log('connection created with Mysql successfully');
//          }
//      });  
//      app.use(bodyParser.json()) // for parsing application/json
// app.use(bodyParser.urlencoded({ extended: true }))  
    //  app.post('/signin',(req,res)=>{
    //      const{emailid,password,confirm_password}=req.body
    //      con.query("INSERT INTO sing_in(emailid,password,confirm_password)VALUES('"+emailid+"','"+password+"','"+confirm_password+"')",(error,result)=>{
    //          if(error){
    //              console.log(error)
    //              return res.status(403).json({status:false,message:error.detail})
    //          }else{
    //              res.status(200).json({status:true,message:"inserted successfully"})
    //          }
    //      })
    //     })
 

app.get('/findway',(req,res)=>{
    res.render('findwayhome')
})
app.get('/buy',(req,res)=>{
    res.render('buy')
})
app.get('/rent',(req,res)=>{
    res.render('rent')
})
app.get('/sign',(req,res)=>{
    res.render('sign')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/homedesign',(req,res)=>{
    res.render('homedesign')
})
 
app.get('/sell',(req,res)=>{
    res.render('sell')
})
app.listen(port,()=>{
    console.log('server is running on port no ' +port)
})