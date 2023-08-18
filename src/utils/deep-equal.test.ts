import { deepEqual } from './deep-equal';

it.each([
  [true, {}, {}],
  [true, [], []],
  [true, [1, 2, 3], [1, 2, 3]],
  [true, [{ a: 'b' }], [{ a: 'b' }]],
  [true, [null, { a: 'b' }], [null, { a: 'b' }]],
  [false, [{ a: 1 }], [{ a: '1' }]],
])('returns %p for %j and %j', (expected, ...args) => {
  expect(deepEqual(...args)).toBe(expected);
});
