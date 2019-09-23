import Result from './Result';

const Results = props => {
  const results = props.results.map(result => <Result key={result.matchId} result={result} />);

  return (
    <>
      <h2>Results</h2>
      {results}
    </>
  );
};

export default Results;
