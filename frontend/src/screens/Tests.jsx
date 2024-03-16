
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Glass from "../components/Glass";
import Info from "./Information";
import { DataContext } from "../context/DataContext";

const Tests = () => {

    const { navigate, assignments, accountData } = useContext(DataContext)

    return (
        !accountData.role ? (
            <div className="assignments-container">
                {assignments.map((item) => (
                    <div onClick={() => navigate(`/info/${item.id}`)}>
                        <Glass key={item.id} classes="box blue">
                            <h1 className="title-assignments">{item.title}</h1>
                            <p className="text-assignments">{item.description}</p>
                        </Glass>
                    </div>
                ))}




            </div>
        ) : (
            <div className="assignments-container">
                {assignments.map((item) => (
                    <div onClick={() => navigate(`/info/${item.id}`)}>
                        <Glass key={item.id} classes="box blue">
                            <h1 className="title-assignments">{item.title}</h1>
                            <p className="text-assignments">{item.description}</p>
                        </Glass>
                    </div>
                ))}


                <Link className="btn-grad tes" to="/dashboard/newtest">+</Link>
            </div>
        )
    );
}

export default Tests
