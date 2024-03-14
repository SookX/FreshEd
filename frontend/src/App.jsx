import { Route, Routes } from "react-router-dom"
import Login from "./screens/Login"
import Register from "./screens/Register"
import DataProvider from "./context/DataContext"
import Home from "./screens/Home"
import Header from "./screens/Header"

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
        </Routes>
      </DataProvider>
    </>
  )
}

export default App
