import React from "react";
import StudentItem from "./StudentItem";

const StudentList = ({ students, removeStudent }) => {
  return (
    <div id="students-list">
      {students.map((student, index) => (
        <StudentItem key={index} student={student} removeStudent={removeStudent} />
      ))}
    </div>
  );
};

export default StudentList;
