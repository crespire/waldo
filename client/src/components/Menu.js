import thumbnailTrack from '../assets/images/thumb_track.jpg';
import thumbnailBeach from '../assets/images/thumb_beach.jpg';
import thumbnailFruit from '../assets/images/thumb_fruit.jpg';
import { Link } from 'react-router-dom';

function Menu(props) {

  return(
    <div className="flex grow justify-around content-center items-center">
      <span className="text-center">
        <Link to="game/track"><img className="max-w-xs" src={thumbnailTrack} alt="Track"></img></Link>Easy&nbsp;
        (<Link className="hover:ring hover:ring-slate-300" to="leaderboards/track">Top scores</Link>)
      </span>
      <span className="text-center">
        <Link to="game/beach"><img className="max-w-xs" src={thumbnailBeach} alt="Beach"></img></Link>Medium&nbsp;
        (<Link className="hover:ring hover:ring-slate-300" to="leaderboards/beach">Top scores</Link>)
      </span>
      <span className="text-center">
        <Link to="game/fruit"><img className="max-w-xs" src={thumbnailFruit} alt="Fruitland"></img></Link>Hard&nbsp;
        (<Link className="hover:ring hover:ring-slate-300" to="leaderboards/fruit">Top scores</Link>)
      </span>
    </div>
  );
}

export default Menu;