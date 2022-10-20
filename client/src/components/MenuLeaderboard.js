import Leaderboard from "./Leaderboard";
import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseURLContext } from "../App";

function MenuLeaderboard(props) {
  const { image } = useParams();
  const [leaderboard, setLeaderboard] = useState({});
  const baseURL = useContext(BaseURLContext);

  useEffect(() => {
    const getLeaderboard = async (img) => {
      const request = `${baseURL}leaderboards/${img}`;
      const response  = await fetch(request, { mode: 'cors' })
        .then((response) => response.json());

      setLeaderboard(response);
    }

    getLeaderboard(image).catch(console.error);
  }, [baseURL, image]);

  return(
    <div className="flex flex-col w-full h-full justify-center items-center">
      { leaderboard.length > 0 && <Leaderboard scores={leaderboard} /> }
      { leaderboard.length === 0 &&
        <div>No {image} scores yet, <Link className="underline hover:ring underline hover:ring-slate-300" to='/'>select an image to play!</Link></div>
      }
    </div>
  );
}

export default MenuLeaderboard;