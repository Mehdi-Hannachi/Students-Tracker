import React, { useState, useEffect } from "react";

const StudentDetails = ({ match, students }) => {
  console.log(students);

  const [student, setStudent] = useState({});

  const findStudent = () => {
    setStudent(students.find((el) => el.id === +match.params.myid));
  };

  useEffect(() => {
    findStudent();
  }, []);
  return (
    <div>
      {JSON.stringify(student)}
      <h1>{student.firstName}</h1>
      <img src={student.photo} />
    </div>
  );
};

export default StudentDetails;
