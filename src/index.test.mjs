import { describe, it } from 'node:test';

import assert from 'assert';

import { generateSchema } from '../esm/index.js';

describe('generateSchema', () => {
  it('exports function', () => {
    assert.strictEqual(typeof generateSchema, 'function');
  });

  it('generates string', () => {
    assert.deepEqual(generateSchema(''), { type: 'string' });
  });
});
