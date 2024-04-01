import React, { useState } from 'react'

const acctype=localStorage.getItem("acctype");
export default function Course() {
    const[title,setTitle]=useState("");
    const[file,setFile]=useState("");
    const uploadfile =(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('title',title);

        formData.append('file',file);
        console.log(title,file);
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
