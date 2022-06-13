const express = require("express")
const app = express()
const bodyParser= require("body-parser")
const cookieParser=require('cookie-parser')
const session=require('express-session')
const flash=require('connect-flash')
const methodOverride = require ('method-override')
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const pdf = require("pdf-parse");
const cors = require("cors");
const profile = require('./model/profile');
// const corsOptions = {
//     origin: true,
//     optionsSuccessStatus: 200,
//     methods: 'POST',
// };
//FOR POSTMAN
app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))
// <------------>  DATABASE   <-------------->
require('./mongoose');

// const storage=multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null,path.join(__dirname ,'./','/uploads'))
//     },
//     filename:(req,file,cb)=>{
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// });
//
// const upload = multer({
//     storage:storage
// });

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

app.post('/form', async (req, res) => {
    console.log(req.body);
    console.log(__dirname);
    // let buff = Buffer.from(req.body.file, 'base64');
    // const fileName = Date.now().toString() + '.pdf';
    // fs.writeFileSync(path.join(__dirname, './','/uploads', fileName), buff);
    //
    // // console.log(req.file.filename);
    // // let dataBuffer = fs.readFileSync(path.join(__dirname, './','/uploads', fileName));
    // pdf(buff).then((data) => {
    //     console.log(data.text);
    // });
    const profiledata = new profile({
        batch: req.body.batch,
        name: req.body.name,
        rollNo: req.body.rollNo,
        branch: req.body.branch,
        contactNo: req.body.contactNo,
        email: req.body.email,
        internships: req.body.internships,
        offers: req.body.offers,
        currentPosition: req.body.currentPosition,
        courses: req.body.courses,
        achievements: req.body.achievements,
        journey: req.body.journey,
        goals: req.body.goals,
        relDetails: req.body.relDetails,
        githubLink: req.body.githubLink,
        linkedinLink: req.body.linkedinLink,
        resumeLink: req.body.resumeLink,
        collegeGithubLink: req.body.collegeGithubLink,
    });
    try {
        await profiledata.save();
    } catch(err) {
        res.send({result: "failure", error: err});
    }
    res.send({result: "success"});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT,function() {
    console.log(`Server has started at ${PORT}`);
});