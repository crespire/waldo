function Leaderboard(props) {
  const { scores } = props;

  return(
    <div className="px-4">
      Top 10 scores:
      <ol className="list-decimal list-inside">
        {scores.map((score, index) => {
          return <li key={index}>{score[0]} - {score[1]}s</li>
        })}
      </ol>
    </div>
  )
}

export default Leaderboard;