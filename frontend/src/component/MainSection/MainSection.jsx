import React, { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import'./MainSection.css';
import axios from 'axios';



const MainSection = () => {
  
  
  const [link, setLink] = useState({
      links: '',
  })
  const [copySuccess, setCopySuccess] = useState(null);

  const [shortedURL, setshortedURL] = useState("")
  
  const shortURL = async () => {
    try {
      if (link.links !== "") {
        const response = await axios.post('http://localhost:8001/url', {
          urls: [link.links], // Assuming the server expects an array of URLs
        });
        if(response.data){
          setshortedURL(`http://localhost:8001/${response.data.id}`)
        }
      } else{
        toast.error("Please Enter URL");
      }
    } catch (error) {
      // Handle network errors or server errors
      console.error("Error shortening URL:", error);
      toast.error("An error occurred while shortening the URL");
    }
  };

  const copy = ()=>{
    navigator.clipboard.writeText(shortedURL)
      .then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(null), 2000); // Reset success message after 2 seconds
      })
      .catch(() => {
        setCopySuccess(null);
      });

  }
  

  return (
    <>
      <div className="container">
        <div className="container" style={{ backgroundColor: "#f4f3cd" }}>
          <div className="top-section">
            <div className="head">
              <div className="img">
                <img src="" alt="" />
              </div>
              <div className="logo"></div>
              <h3 className=" linkheadline"> Link_Shortner</h3>
              <p className="small"> * .... free and always will be.</p>
            </div>
          </div>
          <div className="form-section">
            <div className="input-field">
              <input
                type="text"
                className="search-inp"
                placeholder=" https://www.link_shortner.com"
                onChange={(e)=> setLink({...link, links: e.target.value})}
              />
              <button className="submit-btn cursor-pointer" onClick={shortURL}>
                SHORTEN
                <span>
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </span>
              </button>
            </div>
            
            <div className="result-input">
                <p className="result-link"> {shortedURL} </p>
                {shortedURL == "" ?(<div className="copy-icon " style={{ position:'relative', cursor: "pointer",display:'none'}} >
                  <i onClick={copy} className="fa-regular fa-copy"></i>
                  {copySuccess === true && <span style={{ color: 'green', position:'absolute', bottom: '-50px',right:"10px",backgroundColor:"#ffff", borderRadius:"10px" ,padding:"2px 5px"}}>Copied to clipboard!</span>}
                </div>):<div className="copy-icon" style={{ position:'relative', cursor: "pointer",display:'block'}} >
                  <i onClick={copy} className="fa-regular fa-copy"></i>
                  {copySuccess === true && <span style={{ color: 'green', position:'absolute', bottom: '-50px',right:"10px",backgroundColor:"#ffff", borderRadius:"10px" ,padding:"2px 5px"}}>Copied to clipboard!</span>}
                </div>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
