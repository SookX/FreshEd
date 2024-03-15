import { Link, Outlet } from "react-router-dom"

import '../../css/dashboard.css'
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContext"

const Dashboard = () => {
    const { sticky, setSticky } = useContext(DataContext)

    useEffect(() => {
        setSticky(true)
    }, [])

    window.addEventListener('scroll', setSticky(true))

    return (
        <section className="section-dashboard">
            <Sidebar />

            <Outlet />
        </section>
    )
}

const Sidebar = () => {
    const accData = {
        first_name: 'Martin',
        last_name: 'Velchev',
        class: '9V'
    }

    return (
        <div className="dashboard-sidebar-container">
            <aside className="dashboard-sidebar">

                <div className="sidebar-personal-info">
                    <p className="sidebar-class">{accData.class} class</p>
                    <p className="sidebar-name">{accData.first_name} {accData.last_name}</p>
                </div>

                <nav className="sidebar-nav">
                    <ul className="sidebar-nav-links">
                        <li><Link to="/dashboard" className="sidebar-nav-link">Markbook</Link></li>
                        <li><Link className="sidebar-nav-link">My Learning</Link></li>
                        <li><Link to="/dashboard/assignments" className="sidebar-nav-link">Assignments</Link></li>
                    </ul>
                </nav>

            </aside>
        </div>
    )
}

export default Dashboard