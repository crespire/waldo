import { useState, createContext } from 'react';
import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import ImageArea from "./ImageArea";
import short from 'short-uuid';

const GameIDContext = createContext();

function Game(props) {
  const params = useParams();
  const [startTime, setStartTime] = useState(0);

  return(
    <div className="flex flex-col w-full h-full">
      <GameIDContext.Provider value={short.generate()}>
        <GameInfo />
        <ImageArea image={params['image']} setStartTime={setStartTime} />
      </GameIDContext.Provider>      
    </div>
  );
}

export default Game;