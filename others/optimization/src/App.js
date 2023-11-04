import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  // 부모 컴포넌트의 state가 변하면 자식 컴포넌트까지 re-evaluated된다
  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle) {
      // 함수를 이용해서 state를 변경해야함
      setShowParagraph(preveShowParagraph => !preveShowParagraph);
    }
  }, [allowToggle]); // allowToggle이 변할때만 함수가 re-created 되게끔 dependency 등록

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={showParagraph}/>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
