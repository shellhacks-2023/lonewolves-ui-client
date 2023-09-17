import React from 'react';
import axios from 'axios';

const SubmitButton = ({ userSelection, changeView }) => {

  const handleClick = (e) => {
    e.preventDefault();
    console.log(userSelection)
    axios({
      method: 'post',
      url: 'http://training.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/json/query/roxie/findurparadisesvc-jeff2.1?ver_=0',
      data: {"workshop.findurparadisesvc.1": userSelection},
    })
    changeView(1);
  }

  return (
    <button className="btn" onClick={handleClick} >Submit</button>
  )
};

export default SubmitButton;