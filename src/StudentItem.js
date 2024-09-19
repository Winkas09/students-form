import React, { useState } from "react";

const StudentItem = ({ student, removeStudent }) => {
  const [showPrivateInfo, setShowPrivateInfo] = useState(false);

  const togglePrivateInfo = () => {
    setShowPrivateInfo(!showPrivateInfo);
  };

  return (
    <div className="student-item">
      <p>Name: {student.name}</p>
      <p>Surname: {student.surname}</p>
      <p>Age: {student.age}</p>
      <p>IT Knowledge: {student.knowledgeLevel}</p>
      <p>Group: {student.groupNumber}</p>
      <p>Programming Languages: {student.programmingLanguages.join(", ")}</p>
      <p>Phone: {showPrivateInfo ? student.phoneNumber : "********"}</p>
      <p>Email: {showPrivateInfo ? student.email : "********"}</p>
      <button onClick={togglePrivateInfo}>
        {showPrivateInfo ? "Hide Private Info" : "Show Private Info"}
      </button>
      <button className="remove" onClick={() => removeStudent(student.id)}>
        Remove the student
      </button>
    </div>
  );
};

export default StudentItem;
