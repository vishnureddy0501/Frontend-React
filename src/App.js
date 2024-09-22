import React from 'react';
import SequencesData from './Components/SequencesData.js';
import LearningReact from './Components/LearningReact.js'
import Navbar from './Components/NavBar.js'
import RouterConfig from './Components/router';
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./UserContextStore/Store.js";
import Home from './ClassComponents/Home.js';

const App = () => {
  return (
    <div>
      <StoreProvider>
          <BrowserRouter>
          <div className=' flex flex-row h-[100vh]'>
            <Navbar />
            <Home />
            <div className=' basis-[85%]'>
              <RouterConfig />
            </div>
          </div>
          </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
