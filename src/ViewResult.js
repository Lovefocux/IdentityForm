import React from "react";
import "./view.css";


function ViewResult() {
  return (
    <div className="view-result">
      <div className="view-container">
        <div className="view-headerAllContents">
          <div className="view-header-contents">
            <div className="view-left">
              <h1>Form Results</h1>
              <p>This are the results gotten from your form so far.</p>
            </div>
            <div className="view-right">
            <div className="input-view">
              <input type="text" placeholder="Search result" />
              </div>
              <i className="ri-search-line view-icon"></i>
            <button className="view-btn">
              Filter Results
              <i class="ri-filter-3-line line-icon"></i>
            </button>
            <button className="view-btn-one">
                Download all Results
            </button>
            </div>
          </div>
          <h4>Total Response:<span className="reponses"> 89 Responses</span>
          </h4>
        </div>

        <div className="survey">
          
        </div>
      </div>
    </div>
  );
}

export default ViewResult;
