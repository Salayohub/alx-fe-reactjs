import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

// Optional inline styles
const styles = {
  nav: {
    width:'100%',
    backgroundColor: "#f0f0f0",
    padding: "10px 20px 10px 20px",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: "none",
    color: "blue",
  }
};

export default Navbar;
