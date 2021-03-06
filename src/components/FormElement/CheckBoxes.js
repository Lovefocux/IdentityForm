import React, { useState } from "react";

const CheckBoxes = () => {
	const [checkbox, setCheckbox] = useState(false);

	const showCheckbox = () => {
		setCheckbox(!checkbox);
	};

	return (
		<div className="bio-description">
			<div className="bioData-Long">
				<div className="contentOne-Long">
					<div className="titleContent">
						<h1>Check boxes</h1>
						<p>Add Description(Optional)</p>
					</div>
					<div className="contentIcon" onClick={showCheckbox}>
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
				<div className="checkboxes">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							id="male"
							value="male"
						/>
						<label className="form-check-label" for="male">
							Male
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							id="female"
							value="female"
						/>
						<label className="form-check-label" for="female">
							Female
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="gender"
							id="undefine"
							value="prefer not to say"
						/>
						<label className="form-check-label" for="undefine">
							Prefer not to say
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckBoxes;
