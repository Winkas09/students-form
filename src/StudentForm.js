import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const initialFormData = {
    name: '',
    surname: '',
    age: '',
    phoneNumber: '',
    email: '',
    knowledgeLevel: 5,
    groupNumber: 'FEU 1gr',
    programmingLanguages: []
  };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                programmingLanguages: checked
                    ? [...prevData.programmingLanguages, value]
                    : prevData.programmingLanguages.filter((language) => language !== value)
            }))
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }))
        }
    }

    



const StudentForm = () => {
  return <div>StudentForm</div>;
};

export default StudentForm;
