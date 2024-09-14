import { configureStore } from '@reduxjs/toolkit';
import engagementReducer from './SalesEngagement';

const store = configureStore({
  reducer: {
    engagement: engagementReducer, // this is one reducer. we can include as many reducers we want
  },
});

export default store;
