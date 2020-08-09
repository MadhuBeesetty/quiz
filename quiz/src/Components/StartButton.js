import React from 'react';

const redirect = (topic) => {
  console.log(topic, 'this is from startButton')
}

const StartButton = (topic) => {
  return (
    <div>
      <button onClick={() => redirect(topic)}>Start Quiz</button>
    </div>
  )
}

export default StartButton;
