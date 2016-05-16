/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @emails react-core
 */

'use strict';

var React;
var ReactTestUtils;

var AutoMockedComponent;
var MockedComponent;

describe('ReactMockedComponent', function() {

  beforeEach(function() {
    React = require('React');
    ReactTestUtils = require('ReactTestUtils');

    AutoMockedComponent = jest.genMockFromModule('ReactMockedComponentTestComponent');
    MockedComponent = jest.genMockFromModule('ReactMockedComponentTestComponent');

    ReactTestUtils.mockComponent(MockedComponent);
  });

  pit('should allow an implicitly mocked component to be rendered without warnings', async () => {
    spyOn(console, 'error');
    await ReactTestUtils.renderIntoDocumentAsync(<AutoMockedComponent />);
    expect(console.error.calls.length).toBe(0);
  });

  pit('should allow an implicitly mocked component to be updated', async () => {
    var Wrapper = React.createClass({

      getInitialState: function() {
        return {foo: 1};
      },

      update: function() {
        this.setState({foo: 2});
      },

      render: function() {
        return <div><AutoMockedComponent prop={this.state.foo} /></div>;
      },

    });

    var instance = await ReactTestUtils.renderIntoDocumentAsync(<Wrapper />);

    var found = ReactTestUtils.findRenderedComponentWithType(
      instance,
      AutoMockedComponent
    );
    expect(typeof found).toBe('object');

    instance.update();
  });

  pit('has custom methods on the implicitly mocked component', async () => {
    var instance = await ReactTestUtils.renderIntoDocumentAsync(<AutoMockedComponent />);
    expect(typeof instance.hasCustomMethod).toBe('function');
  });

  it('should allow an explicitly mocked component to be rendered', () => {
    ReactTestUtils.renderIntoDocument(<MockedComponent />);
  });

  pit('should allow an explicitly mocked component to be updated', async () => {
    var Wrapper = React.createClass({

      getInitialState: function() {
        return {foo: 1};
      },

      update: function() {
        this.setState({foo: 2});
      },

      render: function() {
        return <div><MockedComponent prop={this.state.foo} /></div>;
      },

    });
    var instance = await ReactTestUtils.renderIntoDocumentAsync(<Wrapper />);

    var found = ReactTestUtils.findRenderedComponentWithType(
      instance,
      MockedComponent
    );
    expect(typeof found).toBe('object');

    instance.update();
  });

  pit('has custom methods on the explicitly mocked component', async () => {
    var instance = await ReactTestUtils.renderIntoDocumentAsync(<MockedComponent />);
    expect(typeof instance.hasCustomMethod).toBe('function');
  });

});
