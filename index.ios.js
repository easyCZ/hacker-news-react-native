'use strict';

var React = require('react-native');
var {AppRegistry} = React;

var HackerNews = require('./dist/App');


AppRegistry.registerComponent('HackerNewsRCT', () => HackerNews);
