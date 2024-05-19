import Navbar from './Navbar';
import logo from '../assets/images/logo.jpeg';

const Header = () => {
  return ( 
    <header className='header container flex a-center'>
      {/* Page title */}
      <div className="title flex a-center">
        <img src={logo} alt="logo" />
        <h1>TaskZen</h1>
      </div>
      
      {/* Navigation */}
      <Navbar />
    </header>
  );
}
  <header></header>
export default Header;