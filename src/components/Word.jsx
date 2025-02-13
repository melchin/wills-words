import React from 'react';

const style = {
  width: '100%',
  maxWidth: 400,
  height: 200,
  margin: 20,
  fontSize: 60
}

const Word = ({ word }) => {
  const handleOnclick = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
  }

  return <button style={style}onClick={handleOnclick}> {word}</button>

}

export default Word;
