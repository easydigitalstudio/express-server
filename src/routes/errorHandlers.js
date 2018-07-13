import { logger } from '../utils/logger';

export function notFound(name) {
  return ({ method, url }, res) => {
    res.status(404).json({
      code: `${name}.not.found`,
      message: `${method} ${url} does not exist`
    });
  }
}

export function expressError() {
  return ({ code, message, status }, req, res, next) => { //eslint-disable-line
    logger.error({ code, message, status });
    res.status(status || 500).json({ code });
  }
}