import React from 'react';
import Counter from './counter';
import Counter2 from './counter2';
import List from './List';
import StopWatch from './StopWatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StopWatch />
        <Counter />
        <Counter2 />
        <List />
      </header>
    </div>
  );
}

export default App;
