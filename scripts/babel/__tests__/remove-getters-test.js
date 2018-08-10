/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babel = require('babel-core');
const removeGetters = require('../remove-getters');

function transform(input) {
  return babel.transform(input, {
    plugins: [removeGetters],
  }).code;
}

function compare(input, output) {
  const compiled = transform(input);
  expect(compiled).toEqual(output);
}

describe('remove-getters', () => {
  it('should remove getters', () => {
    compare(
      `const object = {
  get prop() {
    return variable;
  }
};`,
      `const object = {
  prop: variable
};`
    );
  });

  it('should not remove other methods or properties', () => {
    compare(
      `const object = {
  prop: 'foo',
  method() {
    return 'bar';
  }
};`,
      `const object = {
  prop: 'foo',
  method() {
    return 'bar';
  }
};`
    );
  });

  it('should not remove getters with a different syntax from the ones generated by Rollup', () => {
    compare(
      `const object = {
  get prop() {
    const foo = 'foo';
    return foo;
  }
};`,
      `const object = {
  get prop() {
    const foo = 'foo';
    return foo;
  }
};`
    );
  });
});
