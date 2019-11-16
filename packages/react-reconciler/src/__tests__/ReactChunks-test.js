/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 * @jest-environment node
 */

let React;
let ReactNoop;
let Suspense;
let chunk;
let readString;

describe('ReactChunks', () => {
  beforeEach(() => {
    jest.resetModules();

    React = require('react');
    ReactNoop = require('react-noop-renderer');

    chunk = React.chunk;
    Suspense = React.Suspense;
    let cache = new Map();
    readString = function(text) {
      let entry = cache.get(text);
      if (!entry) {
        entry = {
          promise: new Promise(resolve => {
            setTimeout(() => {
              entry.resolved = true;
              resolve();
            }, 100);
          }),
          resolved: false,
        };
        cache.set(text, entry);
      }
      if (!entry.resolved) {
        throw entry.promise;
      }
      return text;
    };
  });

  it.experimental('renders a component with a suspending query', async () => {
    function Query(id) {
      return {
        id: id,
        name: readString('Sebastian'),
      };
    }

    function Render(props, data) {
      return (
        <span>
          {props.title}: {data.name}
        </span>
      );
    }

    let loadUser = chunk(Query, Render);

    function App({User}) {
      return (
        <Suspense fallback={'Loading...'}>
          <User title="Name" />
        </Suspense>
      );
    }

    await ReactNoop.act(async () => {
      ReactNoop.render(<App User={loadUser(123)} />);
    });

    expect(ReactNoop).toMatchRenderedOutput('Loading...');

    await ReactNoop.act(async () => {
      jest.advanceTimersByTime(1000);
    });

    expect(ReactNoop).toMatchRenderedOutput(<span>Name: Sebastian</span>);
  });
});
