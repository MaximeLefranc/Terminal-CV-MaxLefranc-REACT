import { useEffect, useRef } from 'react';
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
}) {
  const commandLineRef = useRef();
  // let count = useRef(commands.length);
  useEffect(() => {
    commandLineRef.current.focus();
    // window.addEventListener('keydown', handleSavedCommand);
  }, []);
  useEffect(() => {
    commandLineRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  // const handleSavedCommand = (e) => {
  //   if (e.code === 'ArrowUp') {
  //     console.log(count.current, commands);
  //     setInputValue(commands[count.current]);
  //     count = count.current - 1;
  //   }
  //   if (e.code === 'ArrowDown') {}
  // };
  const handleSubmitCommand = (e) => {
    e.preventDefault();
    if (inputValue !== '') {
      setCommands([
        ...commands,
        inputValue,
      ]);
    }
    console.log(commands);
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
};

export default CommandLine;
