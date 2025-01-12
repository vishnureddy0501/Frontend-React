import React from 'react';
import SequencesData from './Components/SequencesData.js';
import LearningReact from './Components/LearningReact.js'
import Navbar from './Components/NavBar.js'
import RouterConfig from './Components/router';
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./UserContextStore/Store.js";
import Home from './ClassComponents/Home.js';
import UseReducerExample from './InterviewPreparation/useReducerExample.js';
import Revision from './Components/Revision/Revision.js';
import DebounceExample from './InterviewPreparation/Debounce.js';
import DebounceThrottle from './InterviewPreparation/Debounce_Throttle.js';
const App = () => {
  return (
    <div>
      <StoreProvider>
          <BrowserRouter>
          <div className=' flex flex-row h-[100vh]'>
            <Navbar />
            {/* <UseReducerExample /> */}
            {/* <Home /> */}
            <div className=' basis-[85%]'>
              <div>learn react</div>
              <Revision />
              <DebounceExample/>
              <DebounceThrottle />
              {/* <RouterConfig /> */}
            </div>
          </div>
          </BrowserRouter>
      </StoreProvider>
    </div>
  );
};
// https://api.marketstack.com/v1/intraday?access_key=a4c3ec16d869b9f4d7146e1a45193baf&%20symbols=AAPL
export default App;
