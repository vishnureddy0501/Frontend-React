import { SET_SEQUENCES_DATA } from './MutationTypes';

export const setSequencesData = (data, summary, sortBy, sortOrder) => ({
  type: SET_SEQUENCES_DATA,
  payload: { data, summary, sortBy, sortOrder },
});
