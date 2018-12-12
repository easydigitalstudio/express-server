import winston from 'winston';

const logLevel = process.env.LOG_LEVEL || 'info';

export const logOptions = {
  colorize: process.env.NODE_ENV !== 'production',
  timestamp: () => new Date().toISOString(),
  level: logLevel,
  formatter(options) {
    const level = options.level.toLowerCase();
    const timestamp = options.timestamp();
    const meta = options.meta || {};
    const { message } = options;

    const data = {
      level,
      timestamp,
      ...meta,
    };

    if (message) data.message = message;

    return JSON.stringify(data);
  },
};

const winstonTransports = [
  new winston.transports.Console(logOptions),
];

export const logger = winston.createLogger({
  transports: winstonTransports,
});
