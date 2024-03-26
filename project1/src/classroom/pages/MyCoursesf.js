import React, { useEffect, useState } from 'react'
import './MyCourses.css';
import axios from 'axios';
import QRCode from 'react-qr-code';
export default function MyCoursesf () {
  const [courses,setCourses]=useState([]);
  const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(256);
  useEffect(()=>{
    axios.get('http://localhost:3001/my-course')
    .then(courses=>setCourses(courses.data), console.log(courses))
    .catch(err => console.log(err))
  },[]);
  
  return (
    <div>
         My Courses
         {
          courses.map(course=>{
            if(course.course_creator!==localStorage.getItem('name'))
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
