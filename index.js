const express = require("express")
const app = express()
const bodyParser= require("body-parser")
const cookieParser=require('cookie-parser')
const session=require('express-session')
const flash=require('connect-flash')
const methodOverride = require ('method-override')
const path = require("path");
const multer = require("multer");
//FOR POSTMAN
app.use(express.json())
app.use(methodOverride('_method'))
// <------------>  DATABASE   <-------------->
require('./mongoose');

const storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,path.join(__dirname ,'./','/uploads'))
    },
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage:storage
});

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

app.post('/form',upload.single("file"), (req, res) => {
    console.log(req.body);
    console.log(__dirname);
    console.log(req.file.filename);
    let journeyLink = req.file.filename;
    res.send({result: "success"});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,function() {
    console.log(`Server has started at ${PORT}`);
});