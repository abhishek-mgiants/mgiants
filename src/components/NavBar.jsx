import './navbar.css'

const NavBar = () => {
  return (
    <nav className="navigation">
    <ul>
      <li><a href="/" className="blue-btn">Home</a></li>
      <li><a href="/aboutus" className="blue-btn">About Us</a></li>
      <li><a href="/services" className="blue-btn">Services</a></li>
      <li><a href="/contact" className="blue-btn">Contact Us</a></li>
    </ul>
  </nav>
  );
};

export default NavBar;
