import React from "react";

const students = [
    {
        id:1,
        name : "sss",
    },
    {
        id:2,
        name : "ddd",
    },
    {
        id:3,
        name: "www",
    },
    {
        id:4,
        name : "222",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key = {student.id}>{student.name}</li>
            })}
        </ul>
    )
}

export default AttendanceBook;