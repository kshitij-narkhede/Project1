import { useEffect, useState } from "react";
import axios from "axios";
import { pdfjs } from "react-pdf";
import PdfComp from "./PdfComp";
import './Course.css'

const acctype=localStorage.getItem("acctype");
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function Course() {
    const[title,setTitle]=useState("");
    const[file,setFile]=useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const Coursecode=localStorage.getItem("CourseCode");
  useEffect(() => {
    getPdf();
  }, []);
  function matchcourse(Course_id){
    console.log(Course_id);
    console.log(localStorage.getItem("CourseCode")==Course_id);
    return localStorage.getItem("CourseCode")==Course_id;
  }
  
  const getPdf = async () => {
    const result = await axios.get("http://localhost:3001/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("Coursecode",Coursecode);
    console.log(title, file,Coursecode);

    const result = await axios.post(
      "http://localhost:3001/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.statusText === "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`http://localhost:3001/files/${pdf}`)
  };

  

    




    function EditCourse(){
        return (<div className='upload-block'>
            <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Study material</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? ""
            : allImage.map((data) => {
              if(matchcourse(data.Coursecode))
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <h6>Title: {data.Coursecode}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile}/>
        </div>)

    }
    
  return (<>
  <div>{localStorage.getItem("Coursename")}</div>
  <div>{localStorage.getItem("CourseCode")}</div>
  {EditCourse()}
  </>
    
  )
}
