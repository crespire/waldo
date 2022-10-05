import { useParams } from "react-router-dom";

function Game(props) {
  const params = useParams();

  return(
    <div>
      <div>
        CHARACTER PORTRAITS AND TIMER
      </div>
      <div className="max-w-full max-h-full overflow-scroll">
        <img className="min-w-min min-h-min" src={require(`../assets/images/${params['image']}.jpg`)} alt={params['image']}></img>
      </div>
    </div>
  );
}

export default Game;