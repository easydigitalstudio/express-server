import { logger } from '../utils/logger';

export default (req, res, next) => {
  logger.info({
    method: req.method,
    route: req.url,
    time: new Date().toISOString(),
  });
  next();
};
