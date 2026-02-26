function VendorCard({ vendor }) {
  return (
    <div
      style={{
        padding: "15px 0",
        borderBottom: "1px solid #E2E8F0"
      }}
    >
      <h3 style={{ marginBottom: "5px" }}>{vendor.name}</h3>
      <p style={{ margin: "0" }}>{vendor.email}</p>
      <p style={{ margin: "0" }}>{vendor.phone}</p>
    </div>
  );
}

export default VendorCard;