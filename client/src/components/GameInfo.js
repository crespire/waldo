import Portrait from "./Portrait";
import short from "short-uuid";

function GameInfo(props) {
  const { characterStatus } = props;

  return(
    <div className="basis-0 max-h-fit flex justify-evenly items-center py-2">
      { 
        Object.entries(characterStatus).map((character) => {
          return <Portrait key={short.generate()} name={character[0]} isFound={character[1]} />;
        })
      }
    </div>
  );
}

export default GameInfo;