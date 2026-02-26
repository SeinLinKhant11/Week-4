import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn && <Header />}

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn
              ? <Dashboard onLogout={() => setIsLoggedIn(false)} />
              : <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={
            <Login onLoginSuccess={() => setIsLoggedIn(true)} />
          }
        />
      </Routes>
    </>
  );
}

export default App;