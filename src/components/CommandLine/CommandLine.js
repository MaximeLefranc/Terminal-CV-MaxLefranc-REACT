import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { searchCommand, getNewId } from '../../utils/utils';
import './styles.scss';

function CommandLine({
  inputValue, setInputValue, setResponsesArray, responsesArray,
}) {
  const commandLineRef = useRef();
  useEffect(() => commandLineRef.current.focus(), []);

  const handleSubmitCommand = (e) => {
    e.preventDefault();
    searchCommand('fr', inputValue);
    setResponsesArray([
      ...responsesArray,
      {
        id: getNewId(responsesArray),
        author: 'Maxime@Lefranc>',
        command: inputValue,
        response: searchCommand('fr', inputValue),
      },
    ]);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitCommand}>
      <p>
        <span>Maxime@Lefranc{'>'}</span>
        <input type="text" ref={commandLineRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </p>
    </form>
  );
}

CommandLine.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  setResponsesArray: PropTypes.func.isRequired,
  responsesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommandLine;
