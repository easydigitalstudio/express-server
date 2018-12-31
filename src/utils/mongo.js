import { MongoClient } from 'mongodb';
import mustProvide from './error';
import { logger } from './logger';

let database;

export function mongoConnect(mongo, options) {
  return MongoClient
    .connect(mongo.url, options)
    .then((client) => {
      const db = client.db(mongo.name);
      db
        .on('reconnect', () => logger.info('mongo reconnected'))
        .on('close', e => logger.error(e));

      database = db;
      return Promise.resolve(database);
    });
}

export function mongoCollection(collectionName) {
  if (!collectionName || typeof collectionName !== 'string') mustProvide('collectionName');
  return database.collection(collectionName);
}
