import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Vendors from "./pages/Vendors";
import Layout from "./components/Layout";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>

      <Route
        path="/login"
        element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />}
      />

      {isLoggedIn ? (
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard onLogout={() => setIsLoggedIn(false)} />} />
          <Route path="vendors" element={<Vendors />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}

    </Routes>
  );
}

export default App;