
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Glass from "../components/Glass";
import Info from "./Information";
import { DataContext } from "../context/DataContext";

const Tests = () => {

    const { navigate, assignments } = useContext(DataContext)

    return (
        <div className="assignments-container">
            {assignments.map((item) => (
                <div onClick={() => navigate(`/info/${item.id}`)}>
                    <Glass key={item.id} classes="box blue">
                        <h1 className="title-assignments">{item.title}</h1>
                        <p className="text-assignments">{item.description}</p>
                    </Glass>
                </div>
            ))}
            <Link className="btn-grade test" to="/dashboard/newtest">+</Link>

        </div>
    );
}

export default Tests
