import { useState } from "react";
import { PiStudent } from "react-icons/pi";
import { MdAssignmentAdd } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import axios from "axios";

const NewGrade = () => {

    const [grade, setGrade] = useState(6)
    const [student, setStudent] = useState("")
    const [comment, setComment] = useState("")
    const [subject, setSubject] = useState("Mathematics")

    const handleSubmit = async (e) => {
        e.preventDefault()

        const obj = {
            comment,
            grade,
            // student,
            holder_id: 1,
            subject: "Mathematics"
        }

        try {
            const response = await axios.post('http://127.0.0.1:8000/school/addGrade/', obj)

            console.log('NEW GRADE')
            console.log(response)
        } catch(err) {
            console.log(err)
        } finally {
            setGrade(6)
            setStudent("")
            setComment("")
            setSubject("Mathematics")
        }
    }

    return (
        <form className="smth" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="grade-title-1">Add new grade</h1>
            <hr className="vasi" />
            <div className="pfp-student">
                <PiStudent className="pfp-icon" />
                <input className="student" type="text" required placeholder="Student" value={student}
                    onChange={(e) => setStudent(e.target.value)} />
            </div>
            <div>
                <span className="pfp-icon"></span>
                <select className="select-grade" required value={subject} onChange={(e) => setSubject(e.target.value)}>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Literature">Literature</option>
                    <option value="English">English</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Philosophy">Philosophy</option>
                </select>
            </div>
            <div className="grade">
                <MdAssignmentAdd className="pfp-icon" />
                <select className="select-grade" name="grade" required value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="comment-div">
                <FaRegCommentAlt className="pfp-icon" />
                <input className="comment" type="text" required value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <div className="btn-div">
                <button className="btn-grade" type="submit">Add</button>
            </div>


        </form>
    );
}

export default NewGrade