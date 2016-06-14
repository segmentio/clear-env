'use strict';

/*
 * Module dependencies.
 */

var clearAjax = require('@segment/clear-ajax');
var clearCookies = require('@segment/clear-cookies');
var clearImages = require('@segment/clear-images');
var clearListeners = require('@segment/clear-listeners');
var clearScripts = require('@segment/clear-scripts');
var clearIntervals = require('@segment/clear-intervals');
var clearTimeouts = require('@segment/clear-timeouts');
// Load clear-globals only after clear-intervals and clear-timeouts to prevent
// overriding those packages' setTimeout/setInterval mocks
var clearGlobals = require('@segment/clear-globals');

/**
 * Reset initial state.
 *
 * @api public
 */
function clearEnv() {
  clearAjax();
  clearTimeouts();
  clearIntervals();
  clearListeners();
  clearGlobals();
  clearImages();
  clearScripts();
  clearCookies();
}

/*
 * Exports.
 */

module.exports = clearEnv;
