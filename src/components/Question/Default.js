import React from 'react';
import Alliance from '../BusinessForm/Alliance';
import Community from '../BusinessForm/Community';
import CustomerApplication from '../BusinessForm/CustomerApplication';
import JobApplication from '../BusinessForm/JobApplication';
import Rental from '../BusinessForm/Rental';
import StudentForm from '../BusinessForm/StudentForm';

const Default = (props) => {
   return (
      <div>
         {props.sampleDescription ? <StudentForm StudentForm ={props.sampleDescription } /> : null}
         {/* {(props.sampleDescription && props.sampleDescription.formId === 1) ? <StudentForm StudentForm ={props.sampleDescription } /> : null} */}
         {/* :
         {(props.sampleDescription && props.sampleDescription.formId === 2) ? <Rental Rental ={props.sampleDescription} /> : null} */}
         {/* :
         {props.sampleDescription ? <Community Rental ={props.sampleDescription} /> : null} */}
         {/* :
         {props.sampleDescription ? <CustomerApplication Rental ={props.sampleDescription} /> : null}
         :
         {props.sampleDescription ? <JobApplication Rental ={props.sampleDescription} /> : null}
         :
         {props.sampleDescription ? <Alliance Rental ={props.sampleDescription} /> : null} */}
      </div>
   );
}

export default Default;