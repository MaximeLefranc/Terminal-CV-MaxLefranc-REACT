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
  responsesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Responses;
