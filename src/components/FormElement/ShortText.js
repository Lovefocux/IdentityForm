import React from 'react';

function ShortText() {
   return (
      <div className="bio-description">
			<div className="bioData-Long">
				<div className="contentOne-Long">
					<div className="titleContent">
						<h1>Short Text</h1>
						<p>Add Description(Optional)</p>
					</div>
					<div className="contentIcon">
               <svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="25"
							fill="currentColor"
							className="bi bi-toggle-on"
							viewBox="0 0 16 16"
						>
							<path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
						</svg>
                  <p>Required</p>
						<i className="ri-settings-2-line"></i>
						<i class="ri-delete-bin-6-line"></i>
					</div>
				</div>
				<div className="inputDetails-Long">
					<div className="fieldText">
						<div className="field">
                  <label for="longText"></label>
                     <textarea rows="5" cols="40" placeholder="Enter your message"/>
						</div>
					</div>
				</div>
			</div>
		</div>
   );
}

export default ShortText;
