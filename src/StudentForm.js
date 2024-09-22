import React, { useState } from "react";
import "./App.css";

const StudentForm = ({ addStudent }) => {
  const initialFormData = {
    name: "",
    surname: "",
    age: "",
    phoneNumber: "",
    email: "",
    knowledgeLevel: 5,
    groupNumber: "FEU 1 grupė",
    programmingLanguages: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        programmingLanguages: checked
          ? [...prevData.programmingLanguages, value]
          : prevData.programmingLanguages.filter((lang) => lang !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.age || formData.age < 1 || formData.age > 99)
      newErrors.age = "Valid age is required from 1-99";
    if (
      !formData.phoneNumber ||
      formData.phoneNumber.length < 9 ||
      formData.phoneNumber.length > 12
    )
      newErrors.phoneNumber = "Valid phone number is required (9-12 digits)";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.groupNumber) newErrors.groupNumber = "Group number is required";
    if (formData.programmingLanguages.length === 0)
      newErrors.programmingLanguages = "At least one programming language is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      addStudent(formData);
      setFormData(initialFormData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.name && <span className="error-message">{errors.name}</span>}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      {errors.surname && <span className="error-message">{errors.surname}</span>}
      <label>
        Surname:
        <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
      </label>
      {errors.age && <span className="error-message">{errors.age}</span>}
      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>
      {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
      <label>
        Phone Number:
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
      </label>
      {errors.email && <span className="error-message">{errors.email}</span>}
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Knowledge Level:
        <input
          type="range"
          name="knowledgeLevel"
          min="1"
          max="10"
          value={formData.knowledgeLevel}
          onChange={handleChange}
        />
        <span>{formData.knowledgeLevel}</span>
      </label>
      {errors.groupNumber && <span className="error-message">{errors.groupNumber}</span>}
      <label>
        Group Number:
        <label>
          <input
            type="radio"
            name="groupNumber"
            value="FEU 1 grupė"
            checked={formData.groupNumber === "FEU 1 grupė"}
            onChange={handleChange}
          />
          FEU 1 grupė
        </label>
        <label>
          <input
            type="radio"
            name="groupNumber"
            value="FEU 2 grupė"
            checked={formData.groupNumber === "FEU 2 grupė"}
            onChange={handleChange}
          />
          FEU 2 grupė
        </label>
        <label>
          <input
            type="radio"
            name="groupNumber"
            value="FEU 3 grupė"
            checked={formData.groupNumber === "FEU 3 grupė"}
            onChange={handleChange}
          />
          FEU 3 grupė
        </label>
      </label>
      {errors.programmingLanguages && (
        <span className="error-message">{errors.programmingLanguages}</span>
      )}
      <label>
        Programming Languages:
        <label>
          <input
            type="checkbox"
            name="programmingLanguages"
            value="JavaScript"
            checked={formData.programmingLanguages.includes("JavaScript")}
            onChange={handleChange}
          />
          JavaScript
        </label>
        <label>
          <input
            type="checkbox"
            name="programmingLanguages"
            value="Python"
            checked={formData.programmingLanguages.includes("Python")}
            onChange={handleChange}
          />
          Python
        </label>
        <label>
          <input
            type="checkbox"
            name="programmingLanguages"
            value="Java"
            checked={formData.programmingLanguages.includes("Java")}
            onChange={handleChange}
          />
          Java
        </label>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
