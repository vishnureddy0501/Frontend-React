
import { SET_SEQUENCES_DATA } from './MutationTypes';

const initialState = {
  sequencesData: {
    data: [],
    summary: {},
    sortBy: '',
    sortOrder: '',
  },
};

const salesEngagement = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEQUENCES_DATA:
      return {
        ...state,
        sequencesData: action.payload,
      };
    default:
      return state;
  }
};

export default salesEngagement;
