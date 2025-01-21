import { Link } from "react-router-dom";

function Menu() {
  return (
    <header style={{ 
      backgroundColor: "#f4f4f4", 
      padding: "10px", 
      borderBottom: "1px solid #ddd",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h1 style={{ margin: 0, fontSize: "24px" }}>Listados APIS</h1>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/Datos0" style={{ textDecoration: "none", color: "#007bff" }}>Datos0</Link>
        <Link to="/Datos1" style={{ textDecoration: "none", color: "#007bff" }}>Datos1</Link>
      </nav>
    </header>
  );
}

export default Menu;
