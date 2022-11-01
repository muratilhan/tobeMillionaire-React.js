import './App.css';
import { useState } from 'react';
import Question from './components/Question';
import Prizes from './components/Prizes';
import { data } from './DB';
function App() {

  const shuffledQuestions = data.sort(() => Math.random() - 0.5)
  
  const [active, setActive] = useState(1);
  const [earnedMoney, setEarnedMoney] = useState(0)
  console.log(shuffledQuestions)


  return (
    <div className="App">
      <Question earnedMoney={earnedMoney} setActive={setActive} active={active} shuffledQuestions={shuffledQuestions}></Question>
      <Prizes setEarnedMoney={setEarnedMoney} active={active}></Prizes>
    </div>
  );
}

export default App;
