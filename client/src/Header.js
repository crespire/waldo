import { Link } from 'react-router-dom';

function Header(props) {

  return(
    <nav><Link to='/'>Home</Link><Link to='/menu'>Menu</Link></nav>
  );
}

export default Header;