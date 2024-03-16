import { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

const Examples = () => {
    const { tests, setTests } = useContext(DataContext)

    const id = useParams().id

    const [currentTest, setCurrentTest] = useState()

    useEffect(() => {
        // console.log('CURRENT TEST')
        if(tests) setCurrentTest(tests.find(test => test.id === +id))
    }, [tests, id])

    // useEffect(() => {
    //     console.log('CURRENT TEST')
    //     console.log(currentTest)
    // }, [currentTest])








    // SOCKETS
    const socket = new WebSocket('ws://localhost:8765')

    socket.addEventListener("open", (event) => {
        console.log('ws connection has started')

        // if(teacher) socket.send('teacher-123')
    });

    // console.log(teacher)

    useEffect(() => {
        // if(teacher) {
            // console.log('Teacher view')

            socket.addEventListener("message", (event) => {
                // console.log(event.data)
            });

        // }
    }, [])


    useEffect(() => {
        const handleSocket = () => {
            if(document.hidden) {
                socket.send('User Alt Tabbed')
            };
        }

        document.addEventListener('visibilitychange', handleSocket)

        return () => document.removeEventListener('visibilitychange', handleSocket)
    }, [])





    // SUBMITING
    const [answers, setAnswers] = useState([])

    const handleSubmit = () => {
        console.log('ANSWERS')
        console.log(answers)
        setAnswers([])
    }








    return (
        <section className="main-test">
            {
                currentTest &&
                <div className="test-container">
                    <h1 className="heading-test">{currentTest.title}</h1>

                    <br /> {/* br-to na Vasi Sveej */}

                    {currentTest.exercises.map((question, i) => (
                        <Fragment key={i}>
                            <div className="testsheet">
                                <h1 className="question">{question.question}</h1>
                                {
                                    question.is_True ?
                                    <ul className="answers">
                                        <li className="answer">
                                            <textarea />
                                        </li>
                                    </ul>
                                    :
                                    <ul className="answers">
                                        {
                                            question.answers.map((ans, k) => (
                                                <li key={k} className="answer">
                                                    <input name={`q${i}`} type="radio" className="radio-btn" value={answers[i]} onChange={(e) => {
                                                        let newArr = [...answers]

                                                        newArr[i] = ans.id

                                                        setAnswers(newArr)
                                                    }}/>
                                                    <span className="choose">{ans.answer} - {ans.id}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                }
                            </div>
                        </Fragment>
                    ))}
                    <div className="info-btn-container">
                    <button className="info-btn" onClick={handleSubmit}>Submit</button>
                </div>

            </div>
            }
        </section>
    );
}

export default Examples;


