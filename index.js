'use strict';

var path  = require('path');
var fs    = require('fs');
var csss  = require('broccoli-csssplit');

function CSSSPlugin(options) {
  this.name = 'ember-cli-csssplit';
  this.options = options || {};
}

CSSSPlugin.prototype.toTree = function(tree) {
  return csss(tree, this.options);
};

function EmberCLICSSS(project) {
  if (!(this instanceof EmberCLICSSS)) { return new EmberCLICSSS(project); }
  this.project = project;
  this.name    = 'Ember CLI CSSS';
}

EmberCLICSSS.prototype.treeFor = function treeFor() {
};

EmberCLICSSS.prototype.included = function included(app) {
};

EmberCLICSSS.prototype.postprocessTree = function(type, tree) {
  return csss(tree, this.options);
}

module.exports = EmberCLICSSS;
