import { Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Home from "./screens/Home"
import Glass from "./components/Glass"

function App() {
  return (
    <>
      {/* <div className="green2 test">GREEN 2</div>
      <div className="purple test">PURPLE</div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/glass" element={<Glass />} />
      </Routes>
    </>
  )
}

export default App
