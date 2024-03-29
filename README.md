# 🐦 Finch

[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://domjacks.github.io/finch)
[![Github Pages Build status](https://github.com/domjacks/finch/actions/workflows/publish-storybook.yml/badge.svg)](https://github.com/domjacks/finch/actions/workflows/publish-storybook.yml)
[![npm: finch-design-system](https://img.shields.io/npm/v/finch-design-system)](https://www.npmjs.com/package/finch-design-system)
[![Licence](https://img.shields.io/github/license/domjacks/finch)](https://opensource.org/licenses/MIT)

An opinionated Design System.

## Tech Stack

Building components

- 🔵 [Typescript](https://www.typescriptlang.org/) for type-safe superset of Javascript
- ⚛️ [Preact](https://preactjs.com/) declarative component-centric UI
- 📚 [Storybook](https://storybook.js.org) for UI component development
- [Smoothie Lines Icons](https://www.svgrepo.com/collection/smoothie-line-icons/) for SVGs
- [Open Sans](https://fonts.google.com/specimen/Open+Sans) for fonts

Deployment

- 📦 [NPM](https://www.npmjs.com/) for packaging and distribution
- 🚥 [Github Actions](https://github.com/features/actions) for continuous integration
- 🚀 [Github Pages](https://pages.github.com/) for hosting Storybook instance

## Install

```bash
npm i --save finch-design-system
```

## Usage

```jsx
import { render } from 'preact';

import { MyComponent } from 'finch-design-system';

const App = () => <div><MyComponent /></div>;

render(App, document.getElementById('app'));
```
