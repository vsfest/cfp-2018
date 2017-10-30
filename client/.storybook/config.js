import { configure } from '@storybook/react';

function loadStories() {
  require('../src/lib/stories');
}

configure(loadStories, module);
