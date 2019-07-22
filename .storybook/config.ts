import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
  options: {
    name: '🐦 Finch Design System',
    url: 'https://github.com/domjacks/finch',
    theme: themes.dark,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components/', true, /stories\.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
