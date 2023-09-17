import React from 'react';
import axios from 'axios';

const SubmitButton = ({ userSelection, changeView, setParadiseData }) => {

  const handleClick = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      url: 'http://localhost:3000/myparadise',
      data: userSelection,
    })
    .then((res) => {
      setParadiseData(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
    changeView(1);
  }

  return (
    <button className="btn" onClick={handleClick} >Submit</button>
  )
};

export default SubmitButton;