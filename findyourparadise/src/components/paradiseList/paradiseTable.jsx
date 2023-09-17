import react, { useState, useEffect } from 'react';

const ParadiseTable = ({paradiseData}) => {
  const [listData, setListData] = useState(paradiseData.Row);

  useEffect(() => {
    setListData(paradiseData.Row);

  }, [paradiseData])

  const render = () => {
    if (listData) {
      // Use map to generate an array of JSX elements
      const stateElements = listData.slice(0, 5).map((state, index) => (
        <h4 key={index}>
          {`${state.statename}, with a paradise score of ${state.paradisescore}`}
        </h4>
      ));

      return (
        <div>
          {stateElements}
        </div>
      );
    }

    return null;
  }




  return (
    <>
    {render()}
    </>
  );
};

export default ParadiseTable;

