import { useState } from "react";
const studentsEndpoint = "http://localhost:5000/students"

export default function Form({ setStudents }) {
    const [name, setName] = useState("");
    const [grade, setGrade] = useState("");

    async function createStudent() {
        const response = await fetch(studentsEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ name, grade })
        })
        const parsedResponse = await response.json()
        setStudents((prevState) => {
            return [...prevState, parsedResponse]
        })
    }

    function handleNameSubmit(e) {
        e.preventDefault();
        // setStudents((prevState) => {
        //     return [...prevState, { name }];
        // });
        createStudent()
    }
    return (
        <form onSubmit={handleNameSubmit}>
            <label>Student Name</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <label>Student Grade</label>
            <input
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
            />
            <button type="submit">Add Student</button>
        </form>
    )
}