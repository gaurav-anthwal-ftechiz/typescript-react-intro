import React from 'react';
import './App.css';
import AnotherComp from './components/AnotherComp';

const App: React.FC = () => {
  return (
    <div className="App">
      <AnotherComp text='this is a props' show={false}/>
    </div>
  );
}

export default App;
