'use strict';

/*
 * Module dependencies.
 */

var clearAjax = require('@segment/clear-ajax');
var clearCookies = require('@segment/clear-cookies');
var clearGlobals = require('@segment/clear-globals');
var clearImages = require('@segment/clear-images');
var clearIntervals = require('@segment/clear-intervals');
var clearListeners = require('@segment/clear-listeners');
var clearScripts = require('@segment/clear-scripts');
var clearTimeouts = require('@segment/clear-timeouts');

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
