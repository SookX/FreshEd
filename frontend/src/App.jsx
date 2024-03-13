import { Route, Routes } from "react-router-dom"
import Login from "./screens/Login"

function App() {
  return (
    <>
      <div className="green2 test">GREEN 2</div>
      <div className="purple test">PURPLE</div>
      
      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
