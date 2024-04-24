'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/react-dom-server-rendering-stub.production.js');
} else {
  module.exports = require('./cjs/react-dom-server-rendering-stub.development.js');
}
