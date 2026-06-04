import { useState } from "react";
const studentsEndpoint = "http://localhost:3000/students"

export default function Form({ setStudents }) {
    const [name, setName] = useState("");

    async function createStudent() {
        // Optimistic render is changing data in the client before a successful response
        // from the server/network request in anticipation of success
        // setStudents({ name })
        const response = await fetch(studentsEndpoint, {
            method: "POST",
            headers: {
                "Content-Type": 'application.json'
            },
            body: JSON.stringify({ name })
        })
        const parsedResponse = await response.json()
        // Pessimistic rendering waits for a successful server response
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
            <button type="submit">Add Student</button>
        </form>
    )
}