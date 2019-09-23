const Result = props => {
  const day = props.result.matchDate.getDate();
  const monthIndex = props.result.matchDate.getMonth();
  const year = props.result.matchDate.getFullYear();
  const homeOrAway = props.result.homeMatch ? 'Home' : 'Away';

  return (
    <>
      <p>
        Date: {day}/{monthIndex}/{year}
      </p>
      <p>Home or Away: {homeOrAway}</p>
      <p>Opponent: {props.result.opponent}</p>
      <p>
        Score: {props.result.ourScore} - {props.result.opponentScore}
      </p>
      <hr />
    </>
  );
};

export default Result;
