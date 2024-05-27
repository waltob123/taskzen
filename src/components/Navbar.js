import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="nav">
      <ul className="flex a-center">
        <li><Link to="/" className="nav-link">Tasks</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
      </ul>
    </nav>
   );
}
 
export default Navbar


/**
 * React Links
 * Used for routing
 * 
 */