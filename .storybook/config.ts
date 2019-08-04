import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

addDecorator(withA11y);
addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);

const theme = create({
  base: 'light',
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
