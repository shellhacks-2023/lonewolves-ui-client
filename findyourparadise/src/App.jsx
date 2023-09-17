import { useState } from 'react'
import './App.css'
import Title from './components/title/title.jsx';
import ChoiceBox from './components/choiceBox/choiceBox.jsx';
import ParadiseList from './components/paradiseList/paradiseList.jsx';

function App() {
  const [view, setView ] = useState(0);
  const [paradiseData, setParadiseData] = useState({});

  const renderView = () => {
    return view === 0 ? <ChoiceBox changeView={changeView} setParadiseData={setParadiseData} />
    : <ParadiseList paradiseData={paradiseData} />
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
