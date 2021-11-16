import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import StudentsList from "./components/StudentsList/StudentsList";
import StudentDetails from "./components/StudentDetails/StudentDetails";
import { Route } from "react-router-dom";

const App = () => {
  const students = useSelector((state) => state.studentsReducer.students);
  const [filterByName, setFilterByName] = useState("");

  return (
    <div>
      <NavBar setFilterByName={setFilterByName} />

      <Route
        exact
        path="/"
        component={() => (
          <StudentsList students={students} filterByName={filterByName} />
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
