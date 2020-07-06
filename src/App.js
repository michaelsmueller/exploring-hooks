import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import List from './List';
import StopWatch from './StopWatch';
import DataFetching from './DataFetching.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StopWatch />
        <CounterClass />
        <CounterHooks />
        <List />
        <DataFetching />
      </header>
    </div>
  );
}

export default App;
