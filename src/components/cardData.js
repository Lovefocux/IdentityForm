export const cardDatas = [
  {
    id: 1,
    img_url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sales Enquiry Data Form ",
    date: "12 Mar 2022",
    inputDetail: [ 
      {
        firstName: "apple",
        lastName: "orange",
      }
    ]
  },

  {
    id: 2,
    img_url: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
    title: "Bio Data, BVN & NIN Curated",
    date: "12 Mar 2022",
  },

  {
    id: 3,
    img_url: "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Rental Data Collections",
    date: "12 Mar 2022",
  },
 
];


export const TemplateData = [
  {
    id: 1,
    img_url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Student Form",
    word: "Online Registration Form provides areas to collect contact information.",
    ModalDescription: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    inputForm:[{
      formId: 1,
      firstName: "text",
      lastName: "text",
      BioData: "BioData",
      optional: "Add Description(Optional)",
      emailAddress: "email",
      homeAddress: "text",
      gender: "text",
      StartDate: "date",
      number: "number",
      MainTitle: "Student Form",
      description: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    }]
  },

  {
    id: 2,
    img_url: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
    title: "Car Rental Form",
    word: "A typical employment application form with all necessary field to collect information from applicants.",
    ModalDescription: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    inputForm:[{
      formId: 2,
      firstName: "text",
      lastName: "text",
      BioData: "BioData",
      optional: "Add Description(Optional)",
      emailAddress: "email",
      homeAddress: "text",
      gender: "text",
      StartDate: "date",
      number: "number",
      MainTitle: "Car Rental Form",
      description: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    typeTwo:{
        typeTwoTitle: "Car Rental Form",
        pickUpDate: "date",
        DropOffDate: "date",
        Select: "option",
        dropOffLocation: "date"
      }
    }]
  },

  {
    id: 3,
    img_url: "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Community Service Form",
    word: "With a basic Basic Registration Form, collect information regarding location, name and business owners.",
    ModalDescription: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    inputForm:[{
      formId: 3,
      firstName: "text",
      lastName: "text",
      BioData: "BioData",
      optional: "Add Description(Optional)",
      emailAddress: "email",
      homeAddress: "text",
      gender: "text",
      StartDate: "date",
      number: "number",
      MainTitle: "Community Service Form",
      description: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    typeThree:{
        typeThreeTitle: "Agency",
        firstName: "text",
        email: "email",
        gender: "text",
        radio: "radio",
        lastName: "text",
        Select: "option",
        homeAddress: "text",

        typeThreeTitle2: "Service Details",
        StartDate: "date",
        dateOfCompletion: "date",
        TaskDescription: "date",
      }
    
    }]
  },

  {
    id: 4,
    img_url: "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Customer Application Form",
    word: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo nesciunt architecto?",
    ModalDescription: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    inputForm:[{
      firstName: "text",
      lastName: "text",
      BioData: "BioData",
      optional: "Add Description(Optional)",
      emailAddress: "email",
      homeAddress: "text",
      gender: "text",
      StartDate: "date",
      number: "number",
      MainTitle: "Customer Application Form",
      description: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    
      typeFour:{
        typeFourTitle: "reference1",
        firstName: "text",
        email: "email",
        gender: "text",
        radio: "radio",
        lastName: "text",
        Select: "option",
        homeAddress: "text",

        typeFourTitle2: "reference2",
        firstName2: "text",
        email2: "email",
        gender2: "text",
        radio2: "radio",
        lastName2: "text",
        Select2: "option",
        homeAddress2: "text",
      }

    }]
  },

  {
    id: 5,
    img_url: "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Job Application",
    word: "Online Registration Form provides areas to collect contact information.",
    ModalDescription: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    inputForm:[{
      firstName: "text",
      lastName: "text",
      BioData: "BioData",
      optional: "Add Description(Optional)",
      emailAddress: "email",
      homeAddress: "text",
      gender: "text",
      StartDate: "date",
      number: "number",
      MainTitle: "Customer Application Form",
      description: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    
      typeFive:{
        typeFiveTitle: "Other Information",
        Education: "value",
        Employment: "value",
        email: "email",
        gender: "text",
        radio: "radio",
        position: "text",
        Select: "option",
        StartDate: "date",
      }
    }]
  },

  {
    id: 6,
    img_url: "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    title: "Alliance Application Form",
    word: "Online Registration Form provides areas to collect contact information.",
    ModalDescription: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    inputForm:[{
      firstName: "text",
      lastName: "text",
      BioData: "BioData",
      optional: "Add Description(Optional)",
      emailAddress: "email",
      homeAddress: "text",
      gender: "text",
      StartDate: "date",
      number: "number",
      MainTitle: "Alliance Application Form",
      description: "This form is for our new member who are looking to get financial aid from the platform, this form will verify and collect bio data from individuals.",
    
      typeSixTitle:{
        typeSixTitle: "Other Information",
        Education: "value",
        Employment: "value",
        duration: "value",
        reason: "text",
        Select: "option",
      }
    }]
  },
 
];



