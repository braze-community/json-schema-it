import { generateSchema } from './generate-schema';
import * as index from './index';

describe('generateSchema', () => {
  it('exports function', () => {
    expect(index.generateSchema).toBe(generateSchema);
  });
});
