import { configure, storiesOf } from '@storybook/react';
import React from 'react';

import BasicExample from './examples/basic';

function loadStories() {
  console.clear();

  storiesOf('Examples', module)
    .add('basic', () => <BasicExample />)
}

configure(loadStories, module);