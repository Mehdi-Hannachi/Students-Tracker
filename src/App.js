import "./App.css";
import { useState } from "react";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import StudentsList from "./components/StudentsList/StudentsList";
import { data } from "./data";
import SearchStudent from "./components/Filter/SearchStudent";

const sayHi = (name) => {
  return alert(`Hello i am ${name}`);
};

const App = () => {
  const [students, setStudents] = useState(data);
  const [filterByName, setFilterByName] = useState("");

  const addStudent = (newStudent) => {
    return setStudents([...students, newStudent]);
  };

  return (
    <div>
      <NavBar addStudent={addStudent} setFilterByName={setFilterByName} />

      <StudentsList
        students={students}
        filterByName={filterByName}
        sayHi={sayHi}
      />
    </div>
  );
};

export default App;
