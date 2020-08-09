import React, { useState } from 'react';
import StartButton from './Components/StartButton';
import './App.css';

const App = () => {

  const [topic, setTopic] = useState('car');

  const change = (event) => {
    setTopic(event.target.value);
  };

  return (
    <div>
      <label for="Quiz">Choose a Topic:</label>
      <select id="quiz" name="quiz" onChange={change}>
        <option value="math">Maths</option>
        <option value="science">Science</option>
        <option value="geography">Geography</option>
        <option value="Bonus">Bonus-Topic</option>
      </select>
      <p>this is the selected quiz {topic}</p>
      <StartButton topic={topic} />
    </div>
  );
}

export default App;
