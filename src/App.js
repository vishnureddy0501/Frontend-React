import React from 'react';
import SequencesData from './Components/SequencesData.js';
import LearningReact from './Components/LearningReact.js'
import Navbar from './Components/NavBar.js'
import './tailwind.css'

const App = () => {
  return (
    <div>
      {/* <div>hello world, still working</div> */}
      {/* <SequencesData /> */}
      <Navbar />
      <LearningReact />
    </div>
  );
};

export default App;
