# 🐦 Finch

[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://domjacks.github.io/finch)
[![Build Status](https://travis-ci.org/domjacks/finch.svg?branch=master)](https://travis-ci.org/domjacks/finch)
![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)
[![npm: finch-design-system](https://img.shields.io/npm/v/finch-design-system)](https://www.npmjs.com/package/finch-design-system)
[![Known Vulnerabilities](https://snyk.io//test/github/domjacks/finch/badge.svg?targetFile=package.json)](https://snyk.io//test/github/domjacks/finch?targetFile=package.json)
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
- 🚥 [Travis CI](https://travis-ci.org) for continuous integration
- 🚀 [Github Pages](https://pages.github.com/) for hosting Storybook instance

Maintenance

- 🤖 [Dependabot](https://dependabot.com/) for automatic dependency updates
- 🐕 [Snyk](https://snyk.io/) for dependency vulnerability reporting
- 🦔 [Percy](https://percy.io/) for visual testing as a service

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
