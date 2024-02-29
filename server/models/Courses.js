const mongoose=require('mongoose')
const CourseSchema =new mongoose.Schema({
    course_name:String,
    course_id:String,
    course_duration:String,
    course_creator:String,
    course_join_code:String,

})

const CourseModel =mongoose.model("courses",CourseSchema)
module.exports=CourseModel