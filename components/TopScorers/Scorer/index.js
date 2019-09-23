import PropTypes from 'prop-types';

const Scorer = props => {
  return (
    <>
      <p>Scorer Name: {props.scorer.name}</p>
      <p>Goals Scored: {props.scorer.goals}</p>

      <input
        type="number"
        value={props.scorer.goals}
        onChange={props.changed}
      />

      <hr />
    </>
  );
};

Scorer.propTypes = {
  scorer: PropTypes.array.isRequired
};

export default Scorer;
