import React from "react";
import HeaderPage from "./HeaderPage";
import BioData from "./BioData";
import "./afour.css";
import ShortText from "../components/FormElement/ShortText";
import LongText from "../components/FormElement/LongText";
import BankVerification from "../components/FormElement/BankVerification";
import NINVerification from "../components/FormElement/NINVerification";
import MultipleChoice from "../components/FormElement/MultipleChoice";
import FileUpload from "../components/FormElement/FileUpload";
import DropDown from "../components/FormElement/DropDown";
import CheckBoxes from "../components/FormElement/CheckBoxes";
import EducationalData from "../components/FormElement/EducationalData";



function Afour(props) {
	return (
		<div className="fourall">
			<div className="four">
				<div className="A4content">
					<div className="forbutton">
						<div className="pagecancel">
							<button>
								Page 1 <i class="ri-close-fill"></i>
							</button>
						</div>
						<div className="pageadd">
							<button>
								Add Page <i class="ri-add-fill"></i>
							</button>
						</div>
					</div>
					<div className="collaborate">
						<button>
							Collaborator <i class="ri-user-add-line"></i>
						</button>
					</div>
				</div>
				{(props.displayHeader === false) && (props?.sampleDescription?.length < 1) ? (
					<div className="collaborating">
						<div className="inner">
							<p>Start Building your form</p>
						</div>
						<div className="innerdiv">
							<p>Drag and drop from element to start building</p>
						</div>
					</div>
				) : null}
				{props.displayHeader === true ? <HeaderPage /> : null}
				{props.displayBioData === true ? <BioData /> : null}
				{props.displayEducationalData === true ? <EducationalData /> : null}
				{props.displayShortText === true ? <ShortText /> : null}
				{props.displayLongText === true ? <LongText /> : null}
				{props.displayMultipleChoice === true ? <MultipleChoice /> : null}
				{props.displayCheckBoxes === true ? <CheckBoxes /> : null}
				{props.displayFileUpload === true ? <FileUpload /> : null}
				{props.displayDropDown === true ? <DropDown /> : null}
				{props.displayBankVerification === true ? <BankVerification /> : null}
				{props.displayNINVerification === true ? <NINVerification /> : null}
				
			</div>
		</div>
	);
}

export default Afour;
