
import { useContext, useState } from "react";

import Glass from "../components/Glass";

import { DataContext } from "../context/DataContext";

const Learning = () => {

    const { navigate, corections } = useContext(DataContext)

    return (
        <div className="assignments-container">
            {corections.map((item) => (
                <div onClick={() => navigate(`learnings/mylearning/${item.id}`)}>
                    <Glass key={item.id} classes="box green">
                        <h1 className="title-assignments">{item.title}</h1>
                        {item.mistakes.map((k) => (<p className="text-assignments">{k.description}</p>
                        ))}

                    </Glass>
                </div>
            ))}

        </div>
    );
}

export default Learning