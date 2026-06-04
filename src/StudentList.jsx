export default function StudentList({ students, setStudents }) {
    function removeStudent(e) {
        const name = e.target.innerText;
        setStudents((prevState) => {
            return prevState.filter((student) => student !== name);
        });
    }

    return students.map((student, idx) => (
        <p key={idx} onClick={removeStudent}>{student.name}</p>
    ))
}