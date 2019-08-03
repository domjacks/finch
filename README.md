# 🐦 Finch

[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://domjacks.github.io/finch)
[![npm: finch-design-system](https://img.shields.io/npm/v/finch-design-system)](https://www.npmjs.com/package/finch-design-system)
[![Known Vulnerabilities](https://snyk.io//test/github/domjacks/finch/badge.svg?targetFile=package.json)](https://snyk.io//test/github/domjacks/finch?targetFile=package.json)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![Licence](https://img.shields.io/github/license/domjacks/finch)](https://opensource.org/licenses/MIT)

An opinionated Design System.

## Tech Stack

Building components

- 🔵 [Typescript](https://www.typescriptlang.org/) for type-safe superset of Javascript
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI
- 💅 [Styled-components](https://www.styled-components.com/) for component-scoped styling
- 📚 [Storybook](https://storybook.js.org) for UI component development

Deployment

- 📦 [NPM](https://www.npmjs.com/) for packaging and distribution
- 🚀 [Github Pages](https://pages.github.com/) for hosting Storybook instance

Maintenance

- 🤖 [Dependabot](https://dependabot.com/) for automatic dependency updates
- 🐕 [Snyk](https://snyk.io/) for dependency vulnerability reporting

## Install

```bash
npm i --save finch-design-system
```

## Usage

```jsx
import React, { Component } from 'react';

import { MyComponent } from 'finch-design-system';

class App extends Component {
  render() {
    return <MyComponent />;
  }
}
```
