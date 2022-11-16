import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function CommandLine({ inputValue, setInputValue }) {
  const commandLineRef = useRef();
  useEffect(() => commandLineRef.current.focus(), []);

  const handleSubmitCommand = (e) => {
    e.preventDefault();
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
};

export default CommandLine;
