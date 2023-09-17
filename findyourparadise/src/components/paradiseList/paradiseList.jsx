import react from 'react';
import ParadiseTable from './paradiseTable.jsx';

const ParadiseList = ({paradiseData}) => {

  return (
    <>
      <h2>Your paradises are:</h2>
      <ParadiseTable paradiseData={paradiseData} />
    </>

  )
};

export default ParadiseList;