import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import Register from "./screens/Register"
import DataProvider from "./context/DataContext"
import Home from "./screens/Home"
import Header from "./screens/Header"
import Glass from "./components/Glass"
import Dashboard from "./screens/dashboard/Dashboard"
import DashboardMain from "./screens/dashboard/DashboardMain"
import Dashboard2 from "./screens/dashboard/Dashboard2"

function App() {
  return (
    <>
      {/* <div className="green2 test">GREEN 2</div>
      <div className="purple test">PURPLE</div> */}
      <DataProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/glass" element={<Glass />} />
          
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardMain />} />
            <Route path="test" element={<Dashboard2 />} />
          </Route>

        </Routes>
      </DataProvider>

    </>
  );
}

export default App;
