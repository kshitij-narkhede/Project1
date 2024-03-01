const express=require("express");
const mongoose=require('mongoose')
const cors=require("cors")
const StudentModel=require('./models/Students');
const FacultyModel = require("./models/Faculties");
const CourseModel=require("./models/Courses");
const cookieParser=require('cookie-parser');
const app=express()
app.use(express.json())
app.use(cors())
app.use(cookieParser());
// app.use(session({
//     secret:'secret',
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         secure:false,
//         maxAge:100*60*60*24
//     }
// }))
// mongoose.connect("mongodb://127.0.0.1:27017/LearnSpace")
const dbUrl="mongodb+srv://kshitij:10032004@cluster0.drljcil.mongodb.net/?retryWrites=true&w=majority/LearnSpace";
const connectionParam={
    useNewUrlParser:true,
    useUnifiedTopology:true,
}
mongoose.connect(dbUrl,connectionParam)
.then(()=>{
    console.info("Connected to the DB")
})
.catch((e)=>{
    console.log("Error:",e);
});
app.post('/login',(req,res)=>{
    const{email,password}=req.body;
StudentModel.findOne({email:email})
.then(user=>{
    if(user){
            if(user.password===password){
                res.json(user);
                // res.json(user.email);
               

            }
            else{
                res.json("wrong")
                
            }
    }   
    else{res.json("empty")}
})
        })

app.post('/enrolled-course',(req,res)=>{
    const{email}=req.body;
    StudentModel.findOne({email:email})
    .then(user=>{
        if(user){
            res.json(user);
        }
    })
})
app.get('/enrolled-course',(req,res)=>{
    CourseModel.find()
    .then(courses=>res.json(courses))
    .catch(err=>res.json(err))
})
app.post('/ssignup',(req,res)=>{
        StudentModel.create(req.body)
        .then(students=>res.json(students))
        .catch(err=>res.json(err))
})


app.post('/create-course',(req,res)=>{
    CourseModel.create(req.body)
    .then(courses=>res.json(courses))
    .catch(err=>res.json(err))
})

app.post('/fsignup',(req,res)=>{
    StudentModel.create(req.body)
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
})
app.get('/my-course',(req,res)=>{
    CourseModel.find()
    .then(courses=>res.json(courses))
    .catch(err=>res.json(err))

})
app.post('/join-course',(req,res)=>{
    // res.json(req.body);
    const {email,course_join_code}=req.body;
    StudentModel.findOne({"email":email})
    .then(students=>{
        const arr=students.enrolled_courses;
        // console.log(arr);
        arr.push(course_join_code);
        // console.log(arr);
        res.json(students.name);
        StudentModel.updateOne({email:email},{$push: {enrolled_courses:course_join_code}})
        .then(students=>res.json(students))
        .catch(err=>res.json(err))
        })
    .catch(err=>res.json(err))
    
})
app.listen(3001,()=>{
    console.log("Server is Running");
})