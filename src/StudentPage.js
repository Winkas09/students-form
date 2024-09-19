import React, { useState, useEffect } from "react";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import "./App.css";

const StudentPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(storedStudents);
  }, []);

  const addStudent = (student) => {
    const updatedStudents = [student, ...students];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const removeStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  return (
    <div>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} removeStudent={removeStudent} />
    </div>
  );
};

export default StudentPage;
