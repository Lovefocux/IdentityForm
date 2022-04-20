import React from 'react';
import Platform from "../../Assets/Image/Platform-logo.png";
import "../../Styles/description.css";

function PreviewHeader() {
   return (
      <div className="bio-description">
      <div className="BioData-header">
         <div className="BioHeader-content">
         <img src={Platform} alt="Platform" />
            <div className="BioHeader-text">
               <h3>Portfolio Engagement 9 Form</h3>
               <p>
                  This form is for our new member who are looking to get financial
                  aid from the platform, this form will verify and collect bio data
                  from individuals
               </p>
            </div>
         </div>
      </div>
      </div>
   );
}

export default PreviewHeader;