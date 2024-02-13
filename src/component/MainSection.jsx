import React from "react";
// import Styles from '../Styles/Styles.css'

const MainSection = () => {
  return (
    <>
      <div className="container">
        <div className="top-section">
          <div className="head">
            <div className="img">
              <img src="" alt="" />
            </div>
            <div className="logo"></div>
            <h3> link_shortner</h3>
            <p className="small"> * .... free and always will be.</p>
          </div>
        </div>
        <div className="form-section">
          <div className="input-field">
            <input
              type="text"
              class="search-inp"
              placeholder=" https://www.link_shortner.com"
            />
            <button className="submit-btn">
              SHORTEN
              <span>
                <i class="fa-solid fa-wand-magic-sparkles"></i>
              </span>
            </button>
          </div>
          <div className="result-input">
            <p className="result-link"> https://www.link_s/43s4534 </p>
            <div className="copy-icon">
              <i class="fa-regular fa-copy"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
