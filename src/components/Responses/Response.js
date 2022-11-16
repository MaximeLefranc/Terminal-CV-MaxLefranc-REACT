import PropTypes from 'prop-types';
import './styles.scss';

function Response({ author, command, response }) {
  return (
    <div>
      <span className="author--span">{author}</span>
      {command}
    </div>
  );
}

Response.propTypes = {
  author: PropTypes.string.isRequired,
  command: PropTypes.string.isRequired,
  response: PropTypes.array.isRequired,
};

export default Response;
