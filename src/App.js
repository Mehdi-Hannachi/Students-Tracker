import "./App.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import StudentsList from "./components/StudentsList/StudentsList";

const students = [
  {
    id: 1,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Seif",
    secondName: "El Ghoul",
  },

  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Hassan",
    secondName: "Jaha",
  },

  {
    id: 3,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Aziz",
    secondName: "Brinis",
  },

  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Habiba",
    secondName: "Ben Nasr",
  },

  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Med Ali",
    secondName: "Ben Nasr",
  },

  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Dhouha",
    secondName: "Bessalah",
  },

  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Senda",
    secondName: "Debbiche",
  },

  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Rayes",
    secondName: "Guesmi",
  },
  {
    id: 2,
    photo:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Sami",
    secondName: "Yahya",
  },
];

const sayHi = (name) => {
  return alert(`Hello i am ${name}`);
};

const App = () => {
  return (
    <div>
      <NavBar />
      <StudentsList students={students} sayHi={sayHi} />
    </div>
  );
};

export default App;
