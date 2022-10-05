import { Link } from 'react-router-dom';

function Header(props) {

  return(
    <div className="flex justify-around">
      <span className="basis-1/3 text-center">Where's Waldo?</span>
      <nav className="flex justify-around grow">
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
      </nav>
    </div>
  );
}

export default Header;