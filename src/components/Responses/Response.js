import PropTypes from 'prop-types';
import './styles.scss';

function Response({ author, command, response }) {
  return (
    <section>
      <span className="author--span">{author}</span>
      {command}
      <table>
        <tbody>
          {
            response.map((item) => (
              <tr key={item.command}>
                <td>{item.command}</td><td>{item.text}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
}

Response.propTypes = {
  author: PropTypes.string.isRequired,
  command: PropTypes.string.isRequired,
  response: PropTypes.array.isRequired,
};

export default Response;
