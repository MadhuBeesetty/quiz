import React, { useState } from 'react';
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
      <option value="math">Volvo XC90</option>
      <option value="science">Saab 95</option>
      <option value="geography">Mercedes SLK</option>
      <option value="fun">Audi TT</option>
    </select>
    <input type="submit" value="Submit" />
    <p>this is the selected quiz {topic}</p>
    </div>
  );
}

export default App;
