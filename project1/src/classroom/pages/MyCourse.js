import React, { StrictMode, useEffect, useState } from 'react'
import './MyCourses.css';
import axios from 'axios';
import QRCode from 'react-qr-code';
let enrolledcourse=[];
export default function MyCourses () {
    const email=localStorage.getItem('email');



    const [courses,setCourses]=useState([]);
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('green');
    const [size, setSize] = useState(128);


    useEffect(()=>{
      axios.get('http://localhost:3001/enrolled-course')
      .then(courses=>setCourses(courses.data))
      .catch(err => console.log(err))
    },[]);


    // console.log(email);
    useEffect(()=>{
    axios.post('http://localhost:3001/enrolled-course',{email})
    .then(result=>{
    console.log(result.data);
    console.log("Data- "+typeof result.data.enrolled_courses);
    enrolledcourse=Object.values(result.data.enrolled_courses);
    console.log(enrolledcourse[0]==="9oy8jgwe");
    })


    .catch(err => console.log(err))},[]);
    function check(publickey){
      return enrolledcourse.includes(publickey);
    }
  
  return (
    <div>
         My Courses
         {  
         
          courses.map(course=>{
            console.log(typeof course.course_join_code);
            console.log(enrolledcourse[0]);
            if(check(course.course_join_code))

            // if(true)

            return(
          <div className='class-container'>
              <p>Course name:{course.course_name}</p>
              <p>Course Id:{course.course_id}</p>
              <p>Course Duration:{course.course_duration}</p>
              <QRCode
                        title="GeeksForGeeks"
                        value={course.course_join_code}
                        bgColor={back}
                        fgColor={fore}
                        size={size === '' ? 0 : size}
                    />
         </div>
          )})
         }
         
    </div>
  )
}
