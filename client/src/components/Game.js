import { useState, useEffect, createContext } from 'react';
import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import ImageArea from "./ImageArea";
import WinModal from './WinModal';
import short from 'short-uuid';

export const GameIDContext = createContext(null);
export const ImageContext = createContext(null);

function Game(props) {
  const params = useParams();
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
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
      setModalOpen(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterStatus])

  return(
    <div className="flex flex-col w-full h-full">
      <GameIDContext.Provider value={short.generate()}>
        <ImageContext.Provider value={params['image']}>
          <GameInfo characterStatus={characterStatus} />
          <ImageArea image={params['image']} setStartTime={setStartTime} setCharacterStatus={setCharacterStatus} />
          <WinModal setModalOpen={setModalOpen} modalOpen={modalOpen} startTime={startTime} endTime={endTime} />
        </ImageContext.Provider>
      </GameIDContext.Provider>
    </div>
  );
}

export default Game;
