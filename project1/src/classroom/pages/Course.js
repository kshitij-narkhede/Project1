import React from 'react'

export default function Course() {

  return (<>
  <div>{localStorage.getItem("Coursename")}</div>
  <div>{localStorage.getItem("CourseCode")}</div>
  </>
    
  )
}
