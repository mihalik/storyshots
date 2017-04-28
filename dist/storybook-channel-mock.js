'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChannel;

var _storybookChannel = require('@kadira/storybook-channel');

var _storybookChannel2 = _interopRequireDefault(_storybookChannel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createChannel() {
  var transport = {
    setHandler: function setHandler() {},
    send: function send() {}
  };

  return new _storybookChannel2.default({ transport: transport });
}