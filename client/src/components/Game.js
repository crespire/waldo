import { useState } from 'react';
import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import ImageArea from "./ImageArea";

function Game(props) {
  const params = useParams();
  const [startTime, setStartTime] = useState(0);

  return(
    <div className="flex flex-col w-full h-full">
      <GameInfo />
      <ImageArea image={params['image']} setStartTime={setStartTime} />
    </div>
  );
}

export default Game;