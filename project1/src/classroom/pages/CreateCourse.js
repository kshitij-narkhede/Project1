import React,{Component,useState,useEffect} from 'react'
import axios from 'axios'
import { Form, Link ,useNavigate} from 'react-router-dom'

export default function CreateCourse() {
    const navigate=useNavigate();
    const [course_name, setName] = useState();
    const [course_id, setCourse_id] = useState();
    const [course_duration, setCourse_duration] = useState();
    const [course_creator,setCourseCreator]=useState();
    const [course_join_code, setJoin_code] = useState();
    const acctype=localStorage.getItem('acctype');
var coursecode='';
 function generateString() {
    // program to generate random strings

        const result = Math.random().toString(36).substring(2,10);
        coursecode=result;
        display_code();
}
    function display_code(){
        setJoin_code(coursecode);
        setCourseCreator(localStorage.getItem('name'));
        console.log(coursecode);
    }
    const handleSubmitcourse=(e) =>{
       
        e.preventDefault();
        axios.post('http://localhost:3001/create-course',{course_name,course_id,course_duration,course_creator,course_join_code})
        .then(result=>console.log(result) )
        .catch(err=>console.log(err))
        // useEffect(()=>{
        //   win.setItem('name',name);
        //   win.setItem('email',email);}) 
    
        navigate('/dashboard');
      }
      function coursepage(){
        if(acctype==='Faculty'){
            return(<div className='form-container'>
            <form onSubmit={handleSubmitcourse}>
                <p>Course Name: </p>
                <input type='text' placeholder='Course Name' onChange={(e)=>setName(e.target.value)} />
                <p>Course Id: </p>
                <input type='text' placeholder='Course Id' onChange={(e)=>setCourse_id(e.target.value)} />
                <p>Course Duration: </p>
                <input type='text' placeholder='Course Duration'  onChange={(e)=>setCourse_duration(e.target.value)}/>
                <button type='button' onClick={generateString}>generate classroom QR code or txt code</button>
                <button type='submit'>Submit</button>
            </form>
        </div>);
        }
        else{
            return(<h1>You are student</h1>)
            
        }
      }


  return (
    <>
    {coursepage()}
        

                
            

        
       
    </>
  )
}
