'use strict';

const mock = require('egg-mock');
const request = require('supertest');

describe('test/agensgraph.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/agensgraph-test',
    });
    return app.ready();
  });

  after(done => {
    app.agensgraph.end(err => {
      app.close();
      done(err);
    });
  });
  afterEach(mock.restore);

  // it('should GET /', () => {
  //   return app.httpRequest()
  //     .get('/')
  //     .expect('hi, agensgraph')
  //     .expect(200);
  // });
  it('should connect agengraph success', () => {
    console.log(app.callback());
    return request(app.callback())
      .get('/')
      .expect(200);
  });
});
