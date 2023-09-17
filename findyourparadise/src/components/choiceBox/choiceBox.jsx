import React, {useState, useEffect} from 'react';
import ChoiceButton from '../choiceButton/choiceButton.jsx';
import choices from '../../choices/choices.js';
import SubmitButton from '../submitButton/submitButton.jsx';



const ChoiceBox = () => {
  // createState to hold choices object
  // where key is name of choice and prop is bool
  const [ userSelection, setUserSelection ] = useState({});

  // useEffect to build original state based on choices
  useEffect(()=>{
    let temp = {};
    choices.map((choice) => {
      temp[choice] = false;
    })
    setUserSelection(temp);
  }, []);



  const updateUserSelection = (val) => {
      let temp = userSelection;
      temp[val] = !temp[val]
      setUserSelection(temp);
  }

  const renderButtons = () => {
    if (choices) {
      return choices.map((choice, i) =>
        <ChoiceButton key={i} choice={choice}
        updateUserSelection={updateUserSelection}
        userSelection={userSelection} />)
    }
  }

  return (
    <div id="ChoiceBox">
     <div>
      <h4>Choose the aspects that are crucial to you</h4>
      </div>
      <form>
        <div>
        {renderButtons()}
        </div>

      <SubmitButton id="submit-button"/>
      </form>

    </div>
  )
};

export default ChoiceBox;