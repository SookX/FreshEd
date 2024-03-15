import { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";

const Examples = () => {
    const { tests, setTests } = useContext(DataContext)

    const id = useParams().id

    const [currentTest, setCurrentTest] = useState()

    useEffect(() => {
        if(tests) setCurrentTest(tests.find(test => test.id === +id))
    }, [tests, id])

    // SOCKETS
    useEffect(() => {
        const handleSocket = () => {
            // if(document.hidden) console.log('USER LEFT PAGE')
        }

        document.addEventListener('visibilitychange', handleSocket)

        return () => document.removeEventListener('visibilitychange', handleSocket)
    }, [])

    // const tests =
    // {

    //     "title": "Bulgaria",
    //     "possibleQuestions": [
    //         {
    //             "id": 1,
    //             "question": "When was Bulgaria founded?",
    //             "option": 0,
    //             "possibleAnswers":
    //                 [
    //                     {
    //                         "id": 1,
    //                         "answer": "hello"
    //                     },
    //                     {
    //                         "id": 3,
    //                         "answer": "world"
    //                     },
    //                     {
    //                         "id": 2,
    //                         "answer": "bye"

    //                     }
    //                 ]
    //         },
    //         {
    //             "id": 2,
    //             "question": "When was Bulgaria founded?",
    //             "option": 1,
    //             "possibleAnswers":
    //                 [
    //                     {
    //                         "id": 1,
    //                         "answer": "hello"

    //                     }
    //                 ]

    //         }

    //     ]

    // };

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
                                <h1 className="question">{question.name}</h1>
                                {/* <ul className="answers">
                                    {
                                        question.answers.map((ans, k) => (
                                            <li key={k} className="answer">
                                                {q.option ? (
                                                    <textarea />
                                                ) : (
                                                    <>
                                                        <input name="q1" type="radio" className="radio-btn" />
                                                        <span className="choose">{ans.answer}</span>

                                                    </>

                                                )}


                                            </li>
                                        ))
                                    }
                                </ul> */}
                                {
                                    question.Option ?
                                    <ul className="answers"><li className="answer"><textarea /></li></ul>
                                    :
                                    <ul className="answers">
                                        {
                                            question.answers.map((ans, k) => (
                                                <li key={k} className="answer">
                                                    <input name="q1" type="radio" className="radio-btn" />
                                                    <span className="choose">{ans}</span>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                }
                            </div>
                        </Fragment>
                    ))}
                </div>
            }
        </section>
    );
}

export default Examples;


