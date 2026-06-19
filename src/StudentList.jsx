const studentsEndpoint = "http://localhost:5000/students"

export default function StudentList({ students, setStudents }) {
    async function removeStudent(e) {
        const id = e.target.dataset.id;
        const response = await fetch(`${studentsEndpoint}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
        })
        if (response.status === 204) {
            setStudents((prevState) => {
                return prevState.filter((student) => student.id != id);
            });
            console.log('Student was deleted')
        } else {
            console.log('Student was not deleted on the server')
        }
    }

    return students.map((student, idx) => (
        <p key={idx} onClick={removeStudent} data-id={student.id}>Name: {student.name} – Grade: {student.grade}</p>
    ))
}