import React, { useState } from 'react';

const ChoiceButton = ({ choice, updateUserSelection, userSelection }) => {
  const [buttonColor, setButtonColor] = useState('red');


  const handleClick = (e) => {
    e.preventDefault();
    updateUserSelection(choice);
    userSelection[choice] ? setButtonColor('green') : setButtonColor('red');
  }

  // const buttonStyle = {
  //   backgroundColor: userSelection[choice] ? 'green' : 'red',
  //   // Add other CSS properties as needed
  // }

  return (
    <button className="btn" style={{backgroundColor: buttonColor}} onClick={handleClick}>{choice}</button>
    // <button className="btn btn-success" onClick={handleClick}>{choice}</button>
  )
};

export default ChoiceButton;