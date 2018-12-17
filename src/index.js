import express from 'express';
import bodyParser from 'body-parser';
import mustProvide from './utils/error';
import { mongoConnect } from './utils/mongo';
import { dynamoConnect } from './utils/dynamo';
import { notFound, expressError } from './routes/errorHandlers';
import { logger } from './utils/logger';
import config from './config/config';
import explorerRoutes from './routes/explorer';
import './tests/globals';

export getConfig from './utils/config';
export mustProvide from './utils/error';
export mustBeType from './utils/validation';
export { logger } from './utils/logger';
export { mongoCollection } from './utils/mongo';
export { dynamoDB } from './utils/dynamo';

export default class Server {
  constructor({
    routes,
    port = mustProvide('port'),
    name = mustProvide('name'),
    mongo = null,
    dynamo = null,
  }) {
    this.port = port;
    this.mongo = mongo;
    this.dynamo = dynamo;

    const server = express();
    if (config.allowExplorer) server.use(explorerRoutes);
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(routes);
    server.use(expressError());
    server.use(notFound(name));

    this.expressServer = server;
  }

  getServer() {
    return this.expressServer;
  }

  start() {
    return new Promise(async (resolve) => {
      try {
        if (this.mongo) await mongoConnect(this.mongo.url, { useNewUrlParser: true });
        if (this.dynamo) await dynamoConnect(this.dynamo);

        this.app = this.expressServer.listen(this.port, () => {
          logger.info(`Server started on ${this.port}`);
          resolve();
        });
      } catch (e) {
        logger.error(e);
        process.exit(1);
      }
    });
  }
}
