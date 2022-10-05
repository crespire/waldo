import thumbnailTrack from '../assets/images/thumb_track.jpg';
import thumbnailBeach from '../assets/images/thumb_beach.jpg';
import thumbnailFruit from '../assets/images/thumb_fruit.jpg';
import { Link } from 'react-router-dom';

function Menu(props) {

  return(
    <div>
      <Link to="game/track"><img src={thumbnailTrack} alt="Track"></img></Link>
      <Link to="game/beach"><img src={thumbnailBeach} alt="Beach"></img></Link>
      <Link to="game/fruit"><img src={thumbnailFruit} alt="Fruitland"></img></Link>
    </div>
  );
}

export default Menu;