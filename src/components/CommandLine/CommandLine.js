import { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { searchCommand, getNewId } from '../../utils/utils';
import './styles.scss';

function CommandLine({
  inputValue,
  setInputValue,
  setResponsesArray,
  responsesArray,
  lang,
  setLang,
  commands,
  setCommands,
  count,
  setCount,
}) {
  const commandLineRef = useRef();

  const handleSavedCommand = useCallback((e) => {
    if (e.code === 'ArrowUp') {
      e.preventDefault();
      if (commands.length > 0) {
        if (count < commands.length) {
          setCount(count + 1);
          setInputValue(commands[count]);
        }
      }
    }
    if (e.code === 'ArrowDown') {
      e.preventDefault();
      if (commands.length > 0) {
        if (count > 0 && count <= commands.length) {
          if (count === commands.length) {
            setInputValue(commands[count - 2]);
            setCount(count - 2);
          }
          else {
            setInputValue(commands[count - 1]);
            setCount(count - 1);
          }
        }
        else {
          setInputValue('');
        }
      }
    }
  });

  useEffect(() => {
    commandLineRef.current.focus();
  }, []);
  useEffect(() => {
    window.addEventListener('keydown', handleSavedCommand);
    return () => {
      window.removeEventListener('keydown', handleSavedCommand);
    };
  }, [count, commands]);
  useEffect(() => {
    commandLineRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const handleSubmitCommand = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setCommands([
        inputValue,
        ...commands,
      ]);
    }
    if (inputValue === 'clear') {
      setResponsesArray([]);
    }
    else if (inputValue === 'lang fr') {
      setLang('fr');
    }
    else if (inputValue === 'lang en') {
      setLang('en');
    }
    else {
      setResponsesArray([
        ...responsesArray,
        {
          id: getNewId(responsesArray),
          author: 'Maxime@Lefranc>',
          command: inputValue,
          response: searchCommand(lang, inputValue),
        },
      ]);
    }
    setCount(0);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitCommand}>
      <p>
        <span>Maxime@Lefranc{'>'}</span>
        <input type="text" ref={commandLineRef} value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} />
      </p>
    </form>
  );
}

CommandLine.propTypes = {
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  setResponsesArray: PropTypes.func.isRequired,
  responsesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
  commands: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCommands: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default CommandLine;
