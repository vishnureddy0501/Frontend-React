import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSequencesData } from './Actions';

const SequencesData = () => {
  const dispatch = useDispatch();

  // because of useSelector, whenever the state is updated, it will automatically rerenders dom
  const sequencesData = useSelector(state => state.engagement.sequencesData);

  const updateSequencesData = () => {
    const newData = {
      data: [1, 2, 3],
      summary: { count: 3 },
      sortBy: 'id',
      sortOrder: 'asc',
    };
    dispatch(setSequencesData(newData.data, newData.summary, newData.sortBy, newData.sortOrder));
  };

  return (
    <div>
      <h1>Sequences Data</h1>
      <button onClick={updateSequencesData}>Update Sequences Data</button>
      <pre>{JSON.stringify(sequencesData, null, 2)}</pre>
    </div>
  );
};

export default SequencesData;
