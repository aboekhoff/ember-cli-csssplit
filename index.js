'use strict';

var csss  = require('broccoli-csssplit');
var pickFiles  = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');

function EmberCLICSSS(project) {
  if (!(this instanceof EmberCLICSSS)) { return new EmberCLICSSS(project); }
  this.project = project;
  this.name    = 'ember-cli-csssplit';
}

EmberCLICSSS.prototype.included = function included(app) {
  this.app     = app;
  this.options = this.app.options.csssplit || {};
};

EmberCLICSSS.prototype.postprocessTree = function(type, tree) {
  var files = this.options.files || ['**/*.css'];

  var styles = pickFiles(tree, {
    srcDir: '/assets',
    files: files,
    destDir: '/assets'
  });

  return mergeTrees([tree, csss(styles, this.options)], { overwrite: true });
};

module.exports = EmberCLICSSS;
