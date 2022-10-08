import { useState, createContext } from 'react';
import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import ImageArea from "./ImageArea";
import WinModal from './WinModal';
import short from 'short-uuid';

const GameIDContext = createContext();

function Game(props) {
  const params = useParams();
  const [startTime, setStartTime] = useState(0);
  const [characterStatus, setCharacterStatus] = useState({
    "waldo": false,
    "wilma": false,
    "wizard": false,
    "odlaw": false,
  });

  return(
    <div className="flex flex-col w-full h-full">
      <GameIDContext.Provider value={short.generate()}>
        <GameInfo characterStatus={characterStatus} />
        <ImageArea image={params['image']} setStartTime={setStartTime} setCharacterStatus={setCharacterStatus} />
      </GameIDContext.Provider>      
    </div>
  );
}

export default Game;

/*
  How do we handle winning? I want to explore a modal.
  I also think we should validate this front end via testing
  This way, I get some practice with react testing, plus
  I think it would be best to mock the backend with my tests
  to validate behaviour.
*/