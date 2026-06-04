import { useState, useEffect } from "react";

import Form from "./Form";
import Header from "./Header";
import StudentList from "./StudentList"

// HTTP VERBS: GET, POST, PUT, PATCH, DELETE

// CRUD - Creating, Reading, Updating, Deleting

// GET - Reading
// POST - Creating
// PUT/PATCH - Updating
// DELETE - Deleting

const studentsEndpoint = "http://localhost:3000/students"

export default function App() {
  const [students, setStudents] = useState([]);
  
  async function fetchStudents() {
    const response = await fetch(studentsEndpoint);
    const students = await response.json();
    setStudents(students)
  } 

  useEffect(() => {
    fetchStudents();
  }, [])
  
  return (
    <div className="App">
      {/* Header component responsible for showing the header of the app  */}
      <Header />
      {/* The Form component will be responsible for adding a new student */}
      <Form setStudents={setStudents} />
      {/* Create a student component responsible for displaying the students  */}
      <StudentList students={students} setStudents={setStudents}/>
    </div>
  );
}
