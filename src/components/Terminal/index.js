import { useState } from 'react';
import CommandLine from '../CommandLine/CommandLine';
import Header from '../Header/Header';
import Responses from '../Responses/Responses';
import './styles.scss';

function Terminal() {
  const [inputValue, setInputValue] = useState(''); // 1
  const [responsesArray, setResponsesArray] = useState([
    {
      id: 1,
      author: 'Maxime@Lefranc>',
      command: 'help',
      response: [],
    },
  ]); // 2
  return (
    <div className="app">
      <Header />
      <Responses responsesArray={responsesArray} />
      <CommandLine inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
}

export default Terminal;
