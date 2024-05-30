import { Link } from 'react-router-dom';

const NotFound = () => {
  return ( 
    <>
      <section className="about">
        <h2>404</h2>
        <p>Page not found</p>
        <Link to='/'>Home</Link>
      </section>
    </>
   );
}
 
export default NotFound;