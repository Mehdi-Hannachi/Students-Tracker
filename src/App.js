import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import StudentsList from "./components/StudentsList/StudentsList";
import { data } from "./data";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import { Route } from "react-router-dom";

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

      <Route
        exact
        path="/"
        component={() => (
          <StudentsList
            students={students}
            filterByName={filterByName}
            sayHi={sayHi}
          />
        )}
      />

      <Route
        exact
        path="/studentdetails/:myid"
        component={(defaultProps) => (
          <StudentDetails students={students} {...defaultProps} />
        )}
      />
    </div>
  );
};

export default App;
