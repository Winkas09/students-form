import React, { useState } from "react";

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
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.surname) newErrors.surname = "Surname is required";
    if (!formData.age || formData.age < 1 || formData.age > 99)
      newErrors.age = "Valid age is required";
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Valid phone number is required (10 digits)";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.groupNumber) newErrors.groupNumber = "Group number is required";
    if (formData.programmingLanguages.length === 0)
      newErrors.programmingLanguages = "At least one programming language is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      addStudent({ ...formData, id: generateUniqueId() });
      setFormData(initialFormData);
      setErrors({});
    }
  };

  const generateUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          required
          placeholder="Enter your surname"
        />
        {errors.surname && <p className="error">{errors.surname}</p>}

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          placeholder="Enter age"
          min="1"
          max="99"
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          placeholder="Enter your phone number"
          pattern="\d{10}"
          maxLength="10"
        />
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="knowledgeLevel">IT Knowledge Level:</label>
        <input
          type="range"
          id="knowledgeLevel"
          name="knowledgeLevel"
          value={formData.knowledgeLevel}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
        <span>{formData.knowledgeLevel}</span>
      </fieldset>

      <fieldset>
        <legend>Group Number:</legend>
        <label>
          <input
            type="radio"
            name="groupNumber"
            value="FEU 1 grupė"
            checked={formData.groupNumber === "FEU 1 grupė"}
            onChange={handleChange}
            required
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
            required
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
            required
          />
          FEU 3 grupė
        </label>
        <label>
          <input
            type="radio"
            name="groupNumber"
            value="FEU 4 grupė"
            checked={formData.groupNumber === "FEU 4 grupė"}
            onChange={handleChange}
            required
          />
          FEU 4 grupė
        </label>
        {errors.groupNumber && <p className="error">{errors.groupNumber}</p>}
      </fieldset>

      <fieldset id="programming-languages">
        <legend>Programming Languages:</legend>
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
            value="HTML"
            checked={formData.programmingLanguages.includes("HTML")}
            onChange={handleChange}
          />
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            name="programmingLanguages"
            value="CSS"
            checked={formData.programmingLanguages.includes("CSS")}
            onChange={handleChange}
          />
          CSS
        </label>
        <label>
          <input
            type="checkbox"
            name="programmingLanguages"
            value="React"
            checked={formData.programmingLanguages.includes("React")}
            onChange={handleChange}
          />
          React
        </label>
        {errors.programmingLanguages && <p className="error">{errors.programmingLanguages}</p>}
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
