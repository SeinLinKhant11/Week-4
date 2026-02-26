import { useState } from "react";
import VendorCard from "../components/VendorCard";

function Vendors() {

  const [vendors] = useState([
    { id: 1, name: "ABC Trading", email: "abc@email.com", phone: "0911111111" },
    { id: 2, name: "Golden Supplier", email: "golden@email.com", phone: "0922222222" },
    { id: 3, name: "Myanmar Distribution", email: "md@email.com", phone: "0933333333" }
  ]);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Vendor List</h1>

      <div style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}>
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}

export default Vendors;