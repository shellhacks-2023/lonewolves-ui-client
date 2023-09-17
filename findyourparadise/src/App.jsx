import { useState } from 'react'
import './App.css'
import Title from './components/title/title.jsx';
import ChoiceBox from './components/choiceBox/choiceBox.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Title id="header"/>
        <ChoiceBox />
      </div>
    </>
  )
}

export default App
