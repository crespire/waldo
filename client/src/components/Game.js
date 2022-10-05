import { useParams } from "react-router-dom";
import GameInfo from "./GameInfo";
import Image from "./Image";

function Game(props) {
  const params = useParams();

  return(
    <div className="flex flex-col w-full h-full">
      <GameInfo />
      <Image image={params['image']} />
    </div>
  );
}

export default Game;