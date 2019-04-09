'use strict';

const agensgraph = require('./lib/agensgraph');

module.exports = agent => {
  if (agent.config.agensgraph.agent) agensgraph(agent);
};
