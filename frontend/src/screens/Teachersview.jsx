import { useContext, useState } from "react";
import Glass from '../components/Glass';
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const MarkBook = () => {
    const [grades, setGrades] = useState([
        {
            subject: 'Mathematics',
            grades: [
                { id: 1, grade: 4 },
                { id: 2, grade: 6 },
                { id: 3, grade: 6 },
                { id: 4, grade: 4 },
                { id: 5, grade: 5 }
            ]
        },
        {
            subject: 'Electrical Engineering',
            grades: [
                { id: 6, grade: 3 },
                { id: 7, grade: 3 },
                { id: 8, grade: 2 },
                { id: 9, grade: 2 },
                { id: 10, grade: 5 },
                { id: 11, grade: 4 }
            ]
        },
        {
            subject: 'Literature',
            grades: [
                { id: 12, grade: 4 },
                { id: 13, grade: 5 },
                { id: 14, grade: 5 },
                { id: 15, grade: 3 },
                { id: 16, grade: 6 }
            ]
        }
    ]);


    const { accountData } = useContext(DataContext);

    const [gradeDropdown, setGradeDropdown] = useState(null);

    // Function to calculate average grade
    const calculateAverageGrade = (grades) => {
        const totalGrades = grades.reduce((acc, curr) => acc + curr.grade, 0);
        return (totalGrades / grades.length).toFixed(2);
    };

    return (
        <section className="section-markbook">
            <div className="markbook-teacher">
                <p className="markbook-subject first-row">Subject</p>
                <p className="markbook-average first-row">Average Grade</p>

                {grades.map(subject => (
                    <>
                        <p className="markbook-subject">{subject.subject}</p>
                        <div className="markbook-average">
                            {calculateAverageGrade(subject.grades)}
                        </div>
                    </>
                ))}
            </div>
            <div className="glass-avg">
                <Glass classes="average-container purple">
                    <div>
                        <p className="average-text">Average Grade:</p>
                        <p className="average-grade">
                            {calculateAverageGrade(
                                grades.reduce((acc, curr) => acc.concat(curr.grades), [])
                            )}
                        </p>
                    </div>
                </Glass>
                <Link className="btn dark-blue" to="/dashboard/newgrade">+</Link>
            </div>
        </section>
    );
};

export default MarkBook;
