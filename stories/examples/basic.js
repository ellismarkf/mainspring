import React from 'react';
import Mainspring from '../../src';

function BasicExample(props) {
  return (
    <Mainspring>
      {({ today,  }) => (
        <div>
          {console.table(today)}
        </div>
      )}
    </Mainspring>
  );
}

export default BasicExample;