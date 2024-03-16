import axios from "axios";
import { useState } from "react"
import { CiLink } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";

const NewTest = () => {

    // /architectures/question/

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [type, setType] = useState(0)
    const [theme, setTheme] = useState('')
    const [questions, setQuestions] = useState(1)
    const [asnwers, setAnswers] = useState(1)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const obj = {
            title,
            teacher_id: JSON.parse(localStorage.getItem('accData')).id || 1,
            type,
            theme,
            number_of_questions: questions,
            number_of_answers: asnwers
        }

        console.log(obj)

        try {
            const response = await axios.post('http://localhost:8000/architectures/question/', obj)

            console.log("NEW TEST")
            console.log(response)
        } catch(err) {
            console.log(err)
        } finally {
            setUrl('')
            setTitle('')
            setType(0)
            setTheme('')
            setQuestions(1)
            setAnswers(1)
        }
    }


    return (
        <form className="smth" onSubmit={(e) => handleSubmit(e)}>
            <h1 className="grade-title-1">Create new test</h1>
            <hr className="vasi" />
            <div className="test-div">
                <div className="comment-div">
                    <CiLink className="pfp-icon" />
                    <input type="url" className="student" value={url} onChange={(e) => setUrl(e.target.value)}/>
                </div>

                <div className="comment-div">
                    <input className="student" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <select className="select-grade" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value={0}>Multiple Choice Questions</option>
                    <option value={1}>Free Answer Question</option>
                </select>

                <div className="comment-div">
                    <CiTextAlignJustify className="pfp-icon" />
                    <textarea className="comment" value={theme} onChange={(e) => setTheme(e.target.value)}></textarea>
                </div>

                <input type="number" className="student" placeholder="Number of questions" value={questions} onChange={(e) => setQuestions(e.target.value)}/>

                <input type="number" className="student" placeholder="Number of answers" value={asnwers} onChange={(e) => setAnswers(e.target.value)}/>
            </div>

            <div className="btn-div">
                <button type="submit" className="btn-grade">Create Test</button>
            </div>
        </form>
    )
}

export default NewTest