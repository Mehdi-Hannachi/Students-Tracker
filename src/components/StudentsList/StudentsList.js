import React from "react";
import Student from "../Student/Student";
import "./studentlist.css";

const StudentsList = ({ filterByName, students, sayHi }) => {
  return (
    <div className="studentlist">
      {students
        .filter((student) =>
          student.firstName.toLowerCase().includes(filterByName.toLowerCase())
        )
        .map((student, i) => (
          <Student student={student} sayHi={sayHi} key={i} />
        ))}
    </div>
  );
};

export default StudentsList;
