import PropTypes from 'prop-types';
import './styles.scss';

function Response({ author, command, response }) {
  return (
    <section>
      <span className="author--span">{author}</span>{command}
      <table>
        <tbody>
          {
            response.map((item) => (
              <tr key={item.command}>
                { /* eslint-disable-next-line react/no-danger */ }
                <td>{item.command}</td><td dangerouslySetInnerHTML={{ __html: item.text }} />
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
  response: PropTypes.array,
};

Response.defaultProps = {
  response: [
    {
      command: '',
      text: '',
    },
  ],
};

export default Response;
