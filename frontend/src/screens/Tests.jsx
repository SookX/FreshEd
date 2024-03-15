
import { useState } from "react";
import { Link } from "react-router-dom";
import Glass from "../components/Glass";
import Info from "./Information";

const Tests = () => {

    const obj = [
        {
            "title": "Mathematics",
            "id": 1,
            "description": "A comprehensive exam covering various topics in mathematics"
        },
        {
            "title": "English Literature",
            "id": 2,
            "description": "An exam that tests knowledge of English literature and literary analysis"
        },
        {
            "title": "Physics",
            "id": 3,
            "description": "A test of understanding and application of fundamental principles in physics"
        },
        {
            "title": "History",
            "id": 4,
            "description": "An exam on major historical events and their significance"
        },
        {
            "title": "Chemistry",
            "id": 5,
            "description": "A comprehensive exam covering various topics in chemistry"
        },
        {
            "title": "Biology",
            "id": 6,
            "description": "A test of knowledge on living organisms and their processes"
        },
        {
            "title": "Computer Science",
            "id": 7,
            "description": "An exam on programming, algorithms, and computer systems"
        },
        {
            "title": "Geography",
            "id": 8,
            "description": "A test of knowledge on the Earth's physical features and human populations"
        },
        {
            "title": "Economics",
            "id": 9,
            "description": "An exam on principles and theories of economics"
        },
        {
            "title": "Psychology",
            "id": 10,
            "description": "A comprehensive exam on the study of human behavior and mental processes"
        }
    ];


    const handleClick = (id) => {
        // Redirect to the info page with the id as a parameter
        return <Link to={`/info/${id}`} />;
    };

    return (
        <div className="assignments-container">
            {obj.map((item) => (
                <Glass key={item.id} classes="box blue" onClick={() => handleClick(item.id)}>

                    <Link className="link-class" to={{
                        pathname: `/info/${item.id}`,
                        state: {
                            name: item.title,
                            description: item.description
                        }
                    }}>

                        <h1 className="title-assignments">{item.title}</h1>
                        <p className="text-assignments">{item.description}</p>
                    </Link>
                </Glass>
            ))}
        </div>
    );
};

export default Tests
