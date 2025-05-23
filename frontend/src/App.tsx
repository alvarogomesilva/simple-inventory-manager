import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { ResetPassword } from "./pages/Reset-Password";
import { Categories } from "./pages/Categories";
import { Products } from "./pages/Products";
import { Suppliers } from "./pages/Suppliers";
import { Movements } from "./pages/Movements";

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
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/movements" element={<Movements />} />
        </Route>

      
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
