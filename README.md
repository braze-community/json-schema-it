# json-schema-it

[![NPM](https://nodei.co/npm/json-schema-it.png)](https://nodei.co/npm/json-schema-it/)

[![NPM version](https://img.shields.io/npm/v/json-schema-it.svg)](https://www.npmjs.com/package/json-schema-it)
[![build](https://github.com/braze-community/json-schema-it/actions/workflows/build.yml/badge.svg)](https://github.com/braze-community/json-schema-it/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/braze-community/json-schema-it/graph/badge.svg?token=XRoK3dG4YV)](https://codecov.io/gh/braze-community/json-schema-it)

[JSON Schema](https://json-schema.org/) generator.

## Quick Start

```ts
import { generateSchema } from 'json-schema-it';

generateSchema(42); // { type: 'integer' }
```

## Installation

[NPM](https://www.npmjs.com/package/json-schema-it):

```sh
npm install json-schema-it
```

[Yarn](https://yarnpkg.com/package/json-schema-it):

```sh
yarn add json-schema-it
```

## Usage

ES Modules:

```ts
import { generateSchema } from 'json-schema-it';
```

CommonJS:

```ts
const { generateSchema } = require('json-schema-it');
```

Generate JSON Schema:

```ts
generateSchema({
  productId: 1,
  productName: 'A green door',
  price: 12.5,
  tags: ['home', 'green'],
});
```

Output:

```ts
{
  type: 'object',
  properties: {
    productId: { type: 'integer' },
    productName: { type: 'string' },
    price: { type: 'number' },
    tags: { type: 'array', items: { type: 'string' } },
  },
}
```

An error will be thrown for an invalid JSON value:

```ts
generateSchema(undefined); // Uncaught TypeError: Invalid JSON value: undefined
```

## Release

Release is automated with [Release Please](https://github.com/googleapis/release-please).

## License

[MIT](https://github.com/braze-community/json-schema-it/blob/master/LICENSE)
