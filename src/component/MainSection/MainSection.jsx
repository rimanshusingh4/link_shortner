import React from "react";

const MainSection = () => {
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
              />
              <button className="submit-btn cursor-pointer">
                SHORTEN
                <span>
                  <i className="fa-solid fa-wand-magic-sparkles"></i>
                </span>
              </button>
            </div>
            <div className="result-input">
              <p className="result-link"> https://www.link_s/43s4534 </p>
              <div className="copy-icon">
                <i className="fa-regular fa-copy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
