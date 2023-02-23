import { useState } from 'react';
import CommandLine from '../CommandLine/CommandLine';
import Header from '../Header/Header';
import Responses from '../Responses/Responses';
import './styles.scss';

function Terminal() {
  const [inputValue, setInputValue] = useState(''); // 1
  const [responsesArray, setResponsesArray] = useState([]); // 2
  const [lang, setLang] = useState('en'); // 3
  const [commands, setCommands] = useState([]); // 4
  const [count, setCount] = useState(0); // 5
  return (
    <section className="app">
      <Header lang={lang} />
      <Responses responsesArray={responsesArray} />
      <CommandLine
        inputValue={inputValue}
        setInputValue={setInputValue}
        setResponsesArray={setResponsesArray}
        responsesArray={responsesArray}
        lang={lang}
        setLang={setLang}
        commands={commands}
        setCommands={setCommands}
        count={count}
        setCount={setCount}
      />
    </section>
  );
}

export default Terminal;
