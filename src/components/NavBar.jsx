import './navbar.css'
const NavBar = () => {
  return (
    <nav className="navigation">
    <ul>
      <li><a href="/" className="nav-link">Home</a></li>
      <li><a href="/aboutus" className="nav-link">About Us</a></li>
      <li><a href="/services" className="nav-link">Services</a></li>
      <li><a href="/contact" className="nav-link">Contact Us</a></li>
    </ul>
  </nav>
  );
};

export default NavBar;
