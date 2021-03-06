import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import PersonCardFunctional from './components/PersonCardFunctional';

function App() {
  return (
    <>
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do:</h3>
      <ul>
        <li>Learn React</li>
        <li>Climb Mt. Everest</li>
        <li>Run a marathon</li>
        <li>Feed the dogs</li>
      </ul>
    </div>
    <PersonCardFunctional firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
    <PersonCardFunctional firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
    <PersonCardFunctional firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"/>
    <PersonCardFunctional firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </>
  );
}

export default App;
