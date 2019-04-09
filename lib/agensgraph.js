'use strict';

const assert = require('assert');
const ag = require('agensgraph');

let count = 0;

module.exports = app => {
  app.addSingleton('agensgraph', createOneClient);
};

function createOneClient(config, app) {
  let logMsg = '';
  const {
    host,
    port,
    user,
    database,
  } = config;
  logMsg = `[egg-agensgraph] 'host: ${host}', 'port: ${port}', 'user: ${user}', 'database: ${database}' are required on config`;
  assert(host && port && user && database, logMsg);

  app.coreLogger.info(`[egg-agensgraph] connecting ${user}@${host}:${port}/${database}`);
  const client = new ag.Client(config);
  client.connect();

  app.beforeStart(function* () {
    const rs = yield client.query('select now() as currenttime;');
    const index = count++;
    app.coreLogger.info(`[egg-agensgraph] instance[${index}] status OK, agensgraph currenttime: ${rs.rows[0].currenttime}`);
  });
  return client;
}
