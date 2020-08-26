import React from 'react';
// import logo from './logo.svg';
//import arvika from './Arvika.png';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';
import EventBinder from './EventBinding';
import ParentComponent from './ParentComponent';
import ConditionalCarPurchase from './ConditionalOperators';
// import List from './ListInReact';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        {/* <img src={arvika} className="App-logo" alt="arvika" /> */}

        {/* <Greet name="Arvind" name2="Mounika">
          <p>Let's leave for Canada</p>
        </Greet> */}
        {/* <Welcome name="Java" name2="Beans" /> */}


        {/* <EventBinder /> */}
        {/* <ParentComponent /> */}
        <ConditionalCarPurchase/>
        {/* <List /> */}


      </header>


    </div>
  );
}


/*  */

export default App;
