const express = require("express")
const app = express()
const bodyParser= require("body-parser")
const cookieParser=require('cookie-parser')
const session=require('express-session')
const flash=require('connect-flash')
const methodOverride = require ('method-override')

//FOR POSTMAN
app.use(express.json())
app.use(methodOverride('_method'))
// <------------>  DATABASE   <-------------->
require('./mongoose');

//<------------->  GETTING DATA FROM POST REQUEST  <---------------->
app.use(bodyParser.urlencoded({extended: true}));


//<------------->  SETTING COOKIES TO THE BROWSER  <----------------->
app.use(cookieParser())

//<------------->  SETTING MESSAGES FOR REDIRECTING PAGES(i.e. stored in flash session)  <-------------------->
app.use(session({
    secret:'secret123',
    resave:true,
    saveUninitialized:true
}))
app.use(flash())

app.post('/form', (req, res) => {
    console.log(req.body);
    res.send({result: "success"});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,function() {
    console.log(`Server has started at ${PORT}`);
});