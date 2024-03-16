import { useState } from "react";
import { PiStudent } from "react-icons/pi";
import { MdAssignmentAdd } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";

const NewGrade = () => {

    const [grade, setGrade] = useState(6)
    const [student, setStudent] = useState(" ")
    const [comment, setComment] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault

        const obj = {
            grade,
            student,
            comment
        }
    }

    return (
        <form className="smth" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="grade-title-1">Add new grade</h1>
            <hr className="vasi" />
            <div className="pfp-student">
                <PiStudent className="pfp-icon" />
                <input className="student" type="text" placeholder="Student" value={student}
                    onChange={(e) => setStudent(e.target.value)} />
            </div>
            <div className="grade">
                <MdAssignmentAdd className="pfp-icon" />
                <select className="select-grade" name="grade" value={grade} onChange={(e) => setGrade(e.target.value)}>
                    <option value="6">6</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className="comment-div">
                <FaRegCommentAlt className="pfp-icon" />
                <input className="comment" type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
            </div>
            <div className="btn-div">
                <button className="btn-grade" type="submit">Add</button>
            </div>


        </form>
    );
}

export default NewGrade