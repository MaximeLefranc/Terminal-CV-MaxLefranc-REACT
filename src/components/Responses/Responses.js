import PropTypes from 'prop-types';
import Response from './Response';

function Responses({ responsesArray }) {
  return (
    <>
      {responsesArray.map((response) => (
        <Response key={response.id} {...response} />
      ))}
    </>
  );
}

Responses.propTypes = {
  responsesArray: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    command: PropTypes.string.isRequired,
    response: PropTypes.array.isRequired,
  })).isRequired,
};

export default Responses;
