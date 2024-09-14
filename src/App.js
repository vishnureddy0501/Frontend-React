import React from 'react';
import SequencesData from './Components/SequencesData.js';
import LearningReact from './Components/LearningReact.js'
import Navbar from './Components/NavBar.js'
import RouterConfig from './Components/router';
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./UserContextStore/Store.js";

const App = () => {
  return (
    <div>
      <StoreProvider>
          <BrowserRouter>
              <Navbar />
              <RouterConfig />
          </BrowserRouter>
      </StoreProvider>
    </div>
  );
};

export default App;
