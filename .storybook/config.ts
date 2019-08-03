import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

const theme = create({
  base: 'dark',
  brandTitle: '🐦 Finch Design System',
  brandUrl: 'https://github.com/domjacks/finch',
});

addParameters({
  options: {
    theme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/', true, /stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
