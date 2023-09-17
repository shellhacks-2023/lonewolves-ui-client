import React, { useState } from 'react';

const ChoiceButton = ({ choice, updateUserSelection, userSelection }) => {
  const [buttonColor, setButtonColor] = useState('red');


  const handleClick = (e) => {
    e.preventDefault();
    updateUserSelection(choice);
    userSelection[choice] ? setButtonColor('green') : setButtonColor('red');
  }

  return (
    <button className="btn" style={{backgroundColor: buttonColor}} onClick={handleClick}>{choice}</button>
  )
};

export default ChoiceButton;