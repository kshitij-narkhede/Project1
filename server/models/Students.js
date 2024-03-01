const mongoose=require('mongoose')
const StudentSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    institutename:String,
    instituteid: Number,
    birthdate:Date,
    addrtype:String,
    acctype:String,
    enrolled_courses:Array,
})

const StudentModel =mongoose.model("students",StudentSchema)
module.exports=StudentModel