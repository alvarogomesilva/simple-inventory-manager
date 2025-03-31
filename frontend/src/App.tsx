import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ResetPassword } from "./pages/Reset-Password";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />}/>
        </Route>

      
        <Route element={<PrivateRoute />}>
          <Route index path="/dashboard" element={<Dashboard />} />
        </Route>

      
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
