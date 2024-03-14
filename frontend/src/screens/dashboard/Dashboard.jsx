import { Outlet } from "react-router-dom"

import '../../css/dashboard.css'

const Dashboard = () => {
    return (
        <section className="section-dashboard">
            <aside className="dashboard-sidebar">
                Aside
            </aside>

            <Outlet />
        </section>
    )
}

export default Dashboard