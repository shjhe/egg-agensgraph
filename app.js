'use strict';

const agensgraph = require('./lib/agensgraph');

module.exports = app => {
  if (app.config.agensgraph.app) agensgraph(app);
};
