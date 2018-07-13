import express from 'express';
import request from 'supertest';
import { logger } from './utils/logger';
import { expressError } from './routes/errorHandlers';
import Server from './index';

let status;

const router = express.Router();

router.get('/test', (req, res) => {
  logger.info('test');
  return res.send('test');
});

router.use('/error', () => {
  const error = new Error('test error!');
  error.message = 'test error!';
  error.status = status;
  logger.error(error);
  throw error;
});

router.use(expressError());

describe('server', () => {
  let server;

  beforeEach(() => {
    status = 503;
    server = new Server({
      port: 2222,
      name: 'test',
      routes: router
    });
  });

  it('Should throw when no name provided', () => {
    expect(() => new Server({ port: 2222 })).to.throw('name');
  });
  it('Should throw when no port provided', () => {
    expect(() => new Server({ name: 'test' })).to.throw('port');
  });
  it('Should throw when error route called', () => {
    return request(server.getServer())
      .get('/error')
      .expect(503, {});
  });
  it('Should throw 500 when error route called without status', () => {
    status = undefined;
    return request(server.getServer())
      .get('/error')
      .expect(500, {});
  });
  it('Should throw a 404', () => {
    return request(server.getServer())
      .get('/unknown-route')
      .expect(404, { code: 'test.not.found', message: 'GET /unknown-route does not exist' });
  });
  it('Should return test', () => {
    return request(server.getServer())
      .get('/test')
      .expect(200, 'test');
  });
});