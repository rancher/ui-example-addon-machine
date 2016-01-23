/* jshint node: true */
'use strict';

var fs = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var name = 'ui-example-addon-machine';

console.log('Loaded',name,'addon');

module.exports = {
  name: name,

  isDevelopingAddon: function() {
    return true;
  },

  treeForPublic: function(tree) {
    if(fs.existsSync(this.project.root + '/node_modules/')) {
      return mergeTrees([tree, this.publicFiles()], {overwrite: true});
    } else {
      return tree;
    }
  },

  treeForTemplates: function(tree) {
    if(fs.existsSync(this.project.root + '/node_modules/')) {
      return mergeTrees([tree, this.podsTemplates()], {overwrite: true});
    } else { // running as regular app, eg during testing
      return tree;
    }
  },

  publicFiles: function() {
    return new Funnel(this.project.root + '/node_modules/' + name + '/public');
  },

  podsTemplates: function() {
    // Add templates from pods directory, since Ember CLI doesn't include them by default
    return new Funnel(this.project.root + '/node_modules/' + name + '/app', {
      include: ['**/*.hbs'],

      getDestinationPath: function(relativePath) {
        if(relativePath.indexOf('/template.hbs') !== -1) {
          // Remove ".template" from the path, eg: pods/posts/template.hbs => templates/posts.hbs
          return relativePath.substr(0, relativePath.lastIndexOf('/')) + '.hbs';
        } else {
          return relativePath;
        }
      }
    });
  }
};
