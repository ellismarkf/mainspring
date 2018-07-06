import React from 'react';
import Mainspring from '../../src';

function BasicExample(props) {
  return (
    <Mainspring>
      {(stateAndHelpers) => (
        <div>
          {console.log(stateAndHelpers)}
          {stateAndHelpers.today.toLocaleString()}
        </div>
      )}
    </Mainspring>
  );
}

export default BasicExample;