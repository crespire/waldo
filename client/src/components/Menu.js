import thumbnailTrack from '../assets/images/thumb_track.jpg';
import thumbnailBeach from '../assets/images/thumb_beach.jpg';
import thumbnailFruit from '../assets/images/thumb_fruit.jpg';
import { Link } from 'react-router-dom';

function Menu(props) {

  return(
    <div className="flex grow justify-around content-center items-center">
      <span className="text-center">
        <Link to="game/track">Easy<img className="max-w-xs" src={thumbnailTrack} alt="Track"></img></Link>
      </span>
      <span className="text-center">
        <Link to="game/beach">Medium<img className="max-w-xs" src={thumbnailBeach} alt="Beach"></img></Link>
      </span>
      <span className="text-center">
        <Link to="game/fruit">Hard<img className="max-w-xs" src={thumbnailFruit} alt="Fruitland"></img></Link>
      </span>
    </div>
  );
}

export default Menu;