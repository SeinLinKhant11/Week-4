import { useNavigate } from "react-router-dom";

function Dashboard({ onLogout }) {
  const navigate = useNavigate(); // 🔹 hook must be at top of function

  return (
    <div style={{ padding: "40px" }}>
      <h1>Dashboard</h1>
      <p>Welcome to Vendor Management System.</p>

      <button
        onClick={() => {
          onLogout();        // Update parent login state
          navigate("/login"); // Redirect to login page
        }}
        style={{ marginTop: "20px" }}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;