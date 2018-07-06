import { configure, storiesOf } from '@storybook/react';
import React from 'react';

function loadStories() {
  console.clear();

  storiesOf('Examples', module)
    .add('basic', () => <div></div>)
}

configure(loadStories, module);