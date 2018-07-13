import { MongoClient } from 'mongodb';
import { mustProvide } from './error';
import { logger } from './logger';

let database;

export async function mongoConnect(url) {
  return MongoClient
    .connect(url)
    .then((db) => {
      db
        .on('reconnect', () => logger.info('database reconnected'))
        .on('close', e => logger.error(e));

      database = db;
      return Promise.resolve(database);
    });
}

export function mongoCollection(collectionName) {
  if (!collectionName || typeof collectionName !== 'string') mustProvide('collectionName');
  return database.collection(collectionName);
}