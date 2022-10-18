import { Link } from 'react-router-dom';

function Header(props) {

  return(
    <div className="flex justify-around basis-auto min-h-fit">
      <span className="basis-1/3 text-center">Where's Waldo?</span>
      <nav className="flex justify-around grow">
        <Link className="underline hover:ring underline hover:ring-slate-300" to='/'>Home</Link>
      </nav>
    </div>
  );
}

export default Header;