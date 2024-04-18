import React, { useState,useEffect } from 'react'
import axios from "axios";
import { pdfjs } from "react-pdf";

const acctype=localStorage.getItem("acctype");
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Course() {
    const[title,setTitle]=useState("");
    const[file,setFile]=useState("");


  

    
    const uploadfile =async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("file", file);
        console.log(formData);
        const course_join_code =localStorage.getItem("CourseCode");
        const result = await axios.post(
          "http://localhost:3001/course-page",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          },{
            course_join_code
          },
          {title,file}
        );
        console.log(result);
        if (result.status != 200) {
          alert("Uploaded Successfully!!!");
          
        }
    }




    function EditCourse(){
        return (<div className='upload-block'>
            <form onSubmit={uploadfile}>
            <h3>Upload Resources in pdf format</h3>
            <input type="text" className="uploadform" placeholder='Title' 
            onChange={(e)=>setTitle(e.target.value)} required/>
            <input type="file" className="uploadform"  accept="application/pdf"
             onChange={(e)=>setFile(e.target.files[0])} required/>
             <br/>
             <br/>

            <button type="submit" >Upload & Share</button>
            </form>
        </div>)

    }
    
  return (<>
  <div>{localStorage.getItem("Coursename")}</div>
  <div>{localStorage.getItem("CourseCode")}</div>
  {EditCourse()}
  </>
    
  )
}
