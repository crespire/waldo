import { useContext } from "react";
import Portrait from "./Portrait";
import short from "short-uuid";
import { ImageContext } from "./Game";

function GameInfo(props) {
  const { characterStatus } = props;
  const image = useContext(ImageContext);

  return(
    <div className="basis-0 max-h-fit flex justify-evenly items-center py-2">
      You're playing { image.charAt(0).toUpperCase() + image.slice(1) }.
      { 
        Object.entries(characterStatus).map((character) => {
          return <Portrait key={short.generate()} name={character[0]} isFound={character[1]} />;
        })
      }
    </div>
  );
}

export default GameInfo;