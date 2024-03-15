import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "../context/DataContext";


const Info = () => {

    const { navigate, assignments } = useContext(DataContext)

    const [loading, setLoading] = useState(true)

    const id = useParams().id

    const [element, setElement] = useState()

    useEffect(() => {
        setElement(assignments.find(assignment => assignment.id === +id))

    }, [assignments, id])



    useEffect(() => {
        if (element) setLoading(false)
    }, [element])

    return (
        !loading ? (
            <div className="info-container">
                <div className="main-info">
                    <h1 className="title">{element.title}</h1>
                    <p className="answer">{element.description}</p>
                    <button className="info-btn" onClick={() => navigate(`/test`)}>Continue with the test</button>
                </div>

            </div>
        ) : (
            null
        )

    );
};

export default Info;
