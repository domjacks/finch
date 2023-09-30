# 🐦 Finch

[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://domjacks.github.io/finch)
[![Build Status](https://travis-ci.org/domjacks/finch.svg?branch=master)](https://travis-ci.org/domjacks/finch)
[![npm: finch-design-system](https://img.shields.io/npm/v/finch-design-system)](https://www.npmjs.com/package/finch-design-system)
[![Known Vulnerabilities](https://snyk.io//test/github/domjacks/finch/badge.svg?targetFile=package.json)](https://snyk.io//test/github/domjacks/finch?targetFile=package.json)
[![Licence](https://img.shields.io/github/license/domjacks/finch)](https://opensource.org/licenses/MIT)

An opinionated Design System.

## Tech Stack

Building components

- 🔵 [Typescript](https://www.typescriptlang.org/) for type-safe superset of Javascript
- ⚛️ [[Preact](https://preactjs.com/)](https://reactjs.org/) declarative component-centric UI
- 📚 [Storybook](https://storybook.js.org) for UI component development

Deployment

- 📦 [NPM](https://www.npmjs.com/) for packaging and distribution
- 🚥 [Github Actions](https://github.com/features/actions) for continuous integration
- 🚀 [Github Pages](https://pages.github.com/) for hosting Storybook instance

Maintenance

- 🤖 [Dependabot](https://dependabot.com/) for automatic dependency updates
- 🦔 [Chromatic](https://www.chromatic.com) for visual testing as a service

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
