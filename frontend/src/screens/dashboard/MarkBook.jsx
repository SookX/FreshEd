import { useState } from "react"
import Glass from '../../components/Glass'

const MarkBook = () => {
    const [grades, setGrades] = useState([
        {
            subject: 'Mathematics',
            grades: [
                {id: 1, grade: 4}, 
                {id: 2, grade: 6},
                {id: 3, grade: 6}, 
                {id: 4, grade: 4}, 
                {id: 5, grade: 5}
            ]
        },
        {
            subject: 'Electrical Engineering',
            grades: [
                {id: 6, grade: 3}, 
                {id: 7, grade: 3}, 
                {id: 8, grade: 2}, 
                {id: 9, grade: 2}, 
                {id: 10, grade:5}, 
                {id: 11, grade: 4}
            ]
        },
        {
            subject: 'Literature',
            grades: [
                {id: 12, grade: 4}, 
                {id: 13, grade: 5}, 
                {id: 14, grade: 5}, 
                {id: 15, grade: 3}, 
                {id: 16, grade: 6}
            ]
        }
    ])

    const [gradeDropdown, setGradeDropdown] = useState(null)

    return (
        <section className="section-markbook">
            <div className="markbook-container">
                <p className="markbook-subject first-row">Subject</p>
                <p className="markbook-grades first-row">Grades</p>
                <p className="markbook-average first-row">Average Grade</p>

                {
                    grades.map(subject => (
                        <>
                            <p className="markbook-subject">{subject.subject}</p>
                            <div className="markbook-grades">
                                {
                                    subject.grades.map(grade => (
                                        <span className={
                                            grade.grade === 2 ?
                                            "markbook-grade red"
                                            :
                                            grade.grade === 3 ?
                                            "markbook-grade orange"
                                            :
                                            grade.grade === 4 ?
                                            "markbook-grade yellow"
                                            :
                                            grade.grade === 5 ?
                                            "markbook-grade lime"
                                            :
                                            grade.grade === 6 ?
                                            "markbook-grade green"
                                            :
                                            "markbook-grade"
                                        }
                                        onClick={() => gradeDropdown === grade.id ? setGradeDropdown(null) : setGradeDropdown(grade.id)}
                                        >
                                            {grade.grade}
                                            {
                                                gradeDropdown === grade.id &&
                                                <div className="grade-dropdown">Grade Description</div>
                                            }
                                        </span>
                                    ))
                                }
                            </div>
                            <div className="markbook-average">
                                {
                                    // ((subject.grades.reduce((a, b) => a.grade + b.grade, 0)) / subject.grades.length).toFixed(2)
                                    ((subject.grades.map(grade => grade.grade).reduce((a, b) => a + b, 0)) / subject.grades.length).toFixed(2)
                                }
                            </div>
                        </>
                    ))
                }
            </div>

            <Glass classes="average-container purple">
                <div>
                    <p className="average-text">Average Grade:</p>
                    <p className="average-grade">6.00</p>
                </div>
            </Glass>

            {/* <table className="markbook-container">
                <tr>
                    <td className="markbook-subject">Subject</td>
                    <td className="markbook-grades">Grades</td>
                    <td className="markbook-average">Average Grade</td>
                </tr>
                {
                    grades.map(subject => (
                        <tr>
                            <td className="markbook-subject">
                                {subject.subject}
                            </td>

                            <td className="markbook-grades">
                                {
                                    subject.grades.map(grade => <span>{grade} </span>)
                                }
                            </td>
                            <td className="markbook-average">
                                {
                                    ((subject.grades.reduce((a, b) => a + b, 0)) / subject.grades.length).toFixed(2)
                                }
                            </td>
                        </tr>
                    ))
                }
            </table> */}
        </section>
    )
}

export default MarkBook