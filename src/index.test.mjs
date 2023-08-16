import { describe, it } from 'node:test';

import assert from 'assert';

import { generateSchema } from '../esm/index.js';

describe('generateSchema', () => {
  it('generates string', () => {
    assert.deepEqual(generateSchema(''), { type: 'string' });
  });
});
