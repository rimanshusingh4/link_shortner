import React, { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
const MainSection = () => {

  const [link, setLink] = useState({
      links: '',
  })
  // console.log(link.links)
  const [shortedURL, setshortedURL] = useState("")
  
  const shortURL = async () => {
    try {
      if (link.links !== "") {
        const response = await axios.post('http://localhost:8001/url', {
          urls: [link.links], // Assuming the server expects an array of URLs
        });
        // retrive data from Database..................................
        try {
          const res = await fetch('/');
          const jsonData = await res;
          console.log(jsonData)
          // setshortedURL(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);

        }
        // .............................................................
      } else{
        toast.error("Please Enter URL");
      }
    } catch (error) {
      // Handle network errors or server errors
      console.error("Error shortening URL:", error);
      toast.error("An error occurred while shortening the URL");
    }
  };
  
  


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
              <h3 className=""> Link_Shortner</h3>
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
              {/* <CopyToClipboard> */}
                <p className="result-link"> {shortedURL} </p>
                <div className="copy-icon">
                  <i onCopy={()=>setCopy(true)} className="fa-regular fa-copy"></i>
                </div>
              {/* </CopyToClipboard> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
