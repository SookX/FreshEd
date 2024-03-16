import { useState, useRef, useContext } from "react";
import { IoPencilOutline } from "react-icons/io5";
import { LuGraduationCap, LuSchool2 } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { VscMail, VscLock } from "react-icons/vsc";
import pfp from '../img/pfp.png'
import { DataContext } from "../context/DataContext";


const MyProfile = () => {
    // useEffect(() => {
    //     setName(account.username);
    // }, [account]);
    const { accountData } = useContext(DataContext)

    const [editField, setEditField] = useState(null);
    const [profilePicture, setProfilePicture] = useState(null);
    const fileInputRef = useRef(null);

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(file);
        }
    }

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file) {
            setProfilePicture(file);
        }
    }


    function handleProfilePictureClick() {
        fileInputRef.current.click();
    }

    return (


        <main className="section-profile">
            <div className="profile-container">

                <div className="avatar-container">
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleFileSelect}
                    />
                    <div className="pfp-container">
                        {profilePicture ? (
                            <img src={URL.createObjectURL(profilePicture)} className="avatar" alt="Avatar" />
                        ) : (
                            <img src={pfp} className="avatar" alt="Avatar" />
                        )}
                        <IoPencilOutline className="icon-hover" onClick={handleProfilePictureClick} />
                    </div>
                </div>
                <div className="username-container">
                    <span className="username">{accountData.first_name} {accountData.last_name}</span>

                </div>
                <div className="klas-container">
                    <LuGraduationCap className="email-icon" />
                    <span className="email">{accountData.class_name} class</span>
                </div>
                <div className="role-container">
                    <PiStudent className="email-icon" />
                    <span className="email">
                        {
                            accountData.role ?
                            'Teacher'
                            :
                            'Student'
                        }
                    </span>
                </div>
                <div className="school-container">
                    <LuSchool2 className="email-icon" />
                    <span className="email">TUES hardcode</span>
                </div>
                <div className="email-container">
                    <VscMail className="email-icon" />
                    <span className="email">{accountData.email}</span>
                </div>

                <div className="btn-container">
                    <button className="btn-save" onClick={(e) => handleSubmit(e)}>Save changes</button>
                </div>
            </div>
        </main >
    );
}

export default MyProfile