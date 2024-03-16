import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import Register from "./screens/Register"
import DataProvider from "./context/DataContext"
import Home from "./screens/Home"
import Header from "./screens/Header"
import Glass from "./components/Glass"
import Dashboard from "./screens/dashboard/Dashboard"

import MarkBook from "./screens/dashboard/MarkBook"
import Examples from "./screens/Examples"
import Tests from "./screens/Tests"
import Info from "./screens/Information"
import MyProfile from "./screens/MyProfile"
import MyLearning from "./screens/MyLearning"
import NewGrade from "./screens/NewGrade"
import Toast from "./components/Toast"


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
            <Route index element={<MarkBook />} />
            <Route path="test" element={<Dashboard />} />
            <Route path="assignments" element={<Tests />} />
            <Route path="myprofile" element={<MyProfile />} />
            <Route path="mylearning" element={<MyLearning />} />
            <Route path="newgrade" element={<NewGrade />} />
          </Route>

          <Route path="/test/:id" element={<Examples />} />
          <Route path="/info/:id" element={<Info />} />




        </Routes>

        <Toast />
      </DataProvider>

    </>
  );
}

export default App;
