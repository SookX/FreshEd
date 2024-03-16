import { useState } from "react"
import { CiLink } from "react-icons/ci";
import { CiTextAlignJustify } from "react-icons/ci";

const NewTest = () => {





    return (
        <form className="smth">
            <h1 className="grade-title-1">Create new test</h1>
            <hr className="vasi" />
            <div className="test-div">
                <div className="comment-div">
                    <CiLink className="pfp-icon" />
                    <input type="url" className="student" />
                </div>

                <div className="comment-div">
                    <CiTextAlignJustify className="pfp-icon" />
                    <textarea className="comment" ></textarea></div>
            </div>
        </form>
    )
}

export default NewTest