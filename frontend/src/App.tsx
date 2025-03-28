import { BrowserRouter, Route, Routes } from "react-router"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { Dashboard } from "./pages/Dashboard"

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
