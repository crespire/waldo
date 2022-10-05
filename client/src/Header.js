import { Link } from 'react-router-dom';

function Header(props) {

  return(
    <div>
      <span>Where's Waldo?</span>
      <nav><Link to='/'>Home</Link><Link to='/menu'>Menu</Link></nav>
    </div>
  );
}

export default Header;