const express= require ('express')

const mysql= require('mysql')

const hbs= require('hbs')

const app=express();

var db = mysql.createConnection({

host:"localhost",

user:"root",

password:"",
database:"nodepro"

})

db.connect((err)=>{

if(!err)

{

console.log("Connected")

}

else{

console.log("Connection Failed")}})


const path= require ('path');
//connect viewengine
app.set('views', path.join( dirname));
app.set('view engine','hbs')
app.get('/',(req,res)=>{
res.render('views/firstpage')
})
app.listen(8080)
