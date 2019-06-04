/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails react-core
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactART from 'react-art';
import ARTSVGMode from 'art/modes/svg';
import ARTCurrentMode from 'art/modes/current';
import TestUtils from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
ARTCurrentMode.setCurrent(ARTSVGMode);

global.__DEV__ = process.env.NODE_ENV !== 'production';

expect.extend(require('./toWarnDev'));

function App(props) {
  return 'hello world';
}

it("doesn't warn when you use the right act + renderer: dom", () => {
  TestUtils.act(() => {
    TestUtils.renderIntoDocument(<App />);
  });
});

it("doesn't warn when you use the right act + renderer: test", () => {
  TestRenderer.act(() => {
    TestRenderer.create(<App />);
  });
});

it('warns when using createRoot() + .render', () => {
  const root = ReactDOM.unstable_createRoot(document.createElement('div'));
  expect(() => {
    TestRenderer.act(() => {
      root.render(<App />);
    });
  }).toWarnDev(["It looks like you're using the wrong act()"], {
    withoutStack: true,
  });
});

it('warns when using the wrong act version - test + dom: render', () => {
  expect(() => {
    TestRenderer.act(() => {
      TestUtils.renderIntoDocument(<App />);
    });
  }).toWarnDev(["It looks like you're using the wrong act()"], {
    withoutStack: true,
  });
});

it('warns when using the wrong act version - test + dom: updates', () => {
  let setCtr;
  function Counter(props) {
    const [ctr, _setCtr] = React.useState(0);
    setCtr = _setCtr;
    return ctr;
  }
  TestUtils.renderIntoDocument(<Counter />);
  expect(() => {
    TestRenderer.act(() => {
      setCtr(1);
    });
  }).toWarnDev([
    'An update to Counter inside a test was not wrapped in act',
    "It looks like you're using the wrong act()",
  ]);
});

it('warns when using the wrong act version - dom + test: .create()', () => {
  expect(() => {
    TestUtils.act(() => {
      TestRenderer.create(<App />);
    });
  }).toWarnDev(["It looks like you're using the wrong act()"], {
    withoutStack: true,
  });
});

it('warns when using the wrong act version - dom + test: .update()', () => {
  const root = TestRenderer.create(<App key="one" />);
  expect(() => {
    TestUtils.act(() => {
      root.update(<App key="two" />);
    });
  }).toWarnDev(["It looks like you're using the wrong act()"], {
    withoutStack: true,
  });
});

it('warns when using the wrong act version - dom + test: updates', () => {
  let setCtr;
  function Counter(props) {
    const [ctr, _setCtr] = React.useState(0);
    setCtr = _setCtr;
    return ctr;
  }
  const root = TestRenderer.create(<Counter />);
  expect(() => {
    TestUtils.act(() => {
      setCtr(1);
    });
  }).toWarnDev([
    'An update to Counter inside a test was not wrapped in act',
    "It looks like you're using the wrong act()",
  ]);
});

const {Surface, Group, Shape} = ReactART;
function ARTTest(props) {
  return (
    <Surface width={150} height={200}>
      <Group>
        <Shape
          d="M0,0l50,0l0,50l-50,0z"
          fill={new ReactART.LinearGradient(['black', 'white'])}
          key="a"
          width={50}
          height={50}
          x={50}
          y={50}
          opacity={0.1}
        />
        <Shape
          fill="#3C5A99"
          key="b"
          scale={0.5}
          x={50}
          y={50}
          title="This is an F"
          cursor="pointer">
          M64.564,38.583H54l0.008-5.834c0-3.035,0.293-4.666,4.657-4.666
          h5.833V16.429h-9.33c-11.213,0-15.159,5.654-15.159,15.16v6.994
          h-6.99v11.652h6.99v33.815H54V50.235h9.331L64.564,38.583z
        </Shape>
      </Group>
    </Surface>
  );
}

it('does not warn when nesting react-act inside react-dom', () => {
  TestUtils.act(() => {
    TestUtils.renderIntoDocument(<ARTTest />);
  });
});

it('does not warn when nesting react-act inside react-test-renderer', () => {
  TestRenderer.act(() => {
    TestRenderer.create(<ARTTest />);
  });
});

it("doesn't warn if you use nested acts from different renderers", () => {
  TestRenderer.act(() => {
    TestUtils.act(() => {
      TestRenderer.create(<App />);
    });
  });
});
