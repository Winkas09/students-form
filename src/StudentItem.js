import React from "react";

const StudentItem = ({ student, removeStudent }) => {
  return (
    <div className="student-item">
      <p>Name: {student.name}</p>
      <p>Surname: {student.surname}</p>
      <p>Age: {student.age}</p>
      <p>Phone: {student.phoneNumber}</p>
      <p>Email: {student.email}</p>
      <p>IT Knowledge: {student.knowledgeLevel}</p>
      <p>Group: {student.groupNumber}</p>
      <p>Programming Languages: {student.programmingLanguages.join(", ")}</p>
      <button onClick={() => removeStudent(student.id)}>Remove the student</button>
    </div>
  );
};

export default StudentItem;
