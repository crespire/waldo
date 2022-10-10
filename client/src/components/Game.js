import { useState, useEffect, createContext } from 'react';
import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import ImageArea from "./ImageArea";
import WinModal from './WinModal';
import short from 'short-uuid';

const GameIDContext = createContext();

function Game(props) {
  const params = useParams();
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [characterStatus, setCharacterStatus] = useState({
    "waldo": false,
    "wilma": false,
    "wizard": false,
    "odlaw": false,
  });

  useEffect(() => {
    /*
      Every time character status changes we want to check if
      all the values are true.

      If so, then display the modal that will take info and insert
      into backend. Otherwise, do nothing.
    */
    if (Object.values(characterStatus).every(entry => entry === true)) {
      setEndTime(Date.now());
      // run modal
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterStatus])

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
