import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);
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

configure(require.context(`../src/`, true, /stories\.tsx$/), module);
