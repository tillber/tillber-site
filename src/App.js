import React from 'react';
import './App.css';
import Badge from  './components/Badge'
import Portrait from  './components/Portrait'
import Footer from  './components/Footer'
import Navbar from  './components/Navbar'
import Timeline from  './components/Timeline'

function App() {
  return (

    <div className="App">

      <header className="App-header">
      <Navbar/>
        <Portrait/>
      </header>
      <Timeline/>
    </div>
  );
}

export default App;
