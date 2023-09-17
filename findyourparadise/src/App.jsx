import { useState } from 'react'
import './App.css'
import Title from './components/title/title.jsx';
import ChoiceBox from './components/choiceBox/choiceBox.jsx';

function App() {
  const [view, setView ] = useState(0);

  const renderView = () => {
    return view === 0 ? <ChoiceBox changeView={changeView} /> : <h2>Your paradise is:</h2>
  }

  const changeView = (val) => {
    setView(val);
  }
  return (
    <>
      <div>
        <Title id="header"/>
        {renderView()}
      </div>
    </>
  )
}

export default App
