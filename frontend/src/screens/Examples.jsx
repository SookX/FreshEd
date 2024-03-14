import { Fragment } from "react";

const Examples = () => {

    const obj =
    {

        "title": "Bulgaria",
        "possibleQuestions": [
            {
                "id": 1,
                "question": "When was Bulgaria founded?",
                "option": 0,
                "possibleAnswers":
                    [
                        {
                            "id": 1,
                            "answer": "hello"
                        },
                        {
                            "id": 3,
                            "answer": "world"
                        },
                        {
                            "id": 2,
                            "answer": "bye"

                        }
                    ]
            },
            {
                "id": 2,
                "question": "When was Bulgaria founded?",
                "option": 1,
                "possibleAnswers":
                    [
                        {
                            "id": 1,
                            "answer": "hello"

                        }
                    ]

            }

        ]

    };

    return (
        <section className="main-test">
            <div className="test-container">
                <h1 className="heading-test">{obj.title}</h1>
                <br /> {/* br-to na Vasi Sveej */}
                {obj.possibleQuestions.map((q, i) => (
                    <Fragment key={i}>
                        <div className="testsheet">
                            <h1 className="question">{q.question}</h1>
                            <ul className="answers">
                                {q.possibleAnswers.map((ans, k) => (
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
                                ))}
                            </ul>
                        </div>
                    </Fragment>
                ))}
            </div>
        </section>
    );
}

export default Examples;
