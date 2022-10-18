import Leaderboard from "./Leaderboard";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function MenuLeaderboard(props) {
  const { image } = useParams();
  const [leaderboard, setLeaderboard] = useState({});

  useEffect(() => {
    const getLeaderboard = async (img) => {
      const requestURL = `http://localhost:3000/leaderboards/${img}`;
      console.log(requestURL);
      const response  = await fetch(requestURL, { mode: 'cors' })
        .then((response) => response.json());

      setLeaderboard(response);
    }

    getLeaderboard(image).catch(console.error);
  }, []);

  return(
    <div className="flex flex-col w-full h-full justify-center items-center">
      { leaderboard.length > 0 && <Leaderboard scores={leaderboard} /> }
      { leaderboard.length === 0 &&
        <div>No {image} scores yet, <Link className="hover:ring hover:ring-slate-300" to='/'>select an image to play!</Link></div>
      }
    </div>
  );
}

export default MenuLeaderboard;