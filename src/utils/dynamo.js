import AWS from 'aws-sdk';
import { logger } from './logger';

let database;

export function dynamoConnect({ region, apiVersion, auth }) {
  AWS.config.update({
    region,
    accessKeyId: auth.accessKeyId,
    secretAccessKey: auth.secretAccessKey,
  });
  database = new AWS.DynamoDB({ apiVersion });
  return database;
}

const promisify = (params, fct) => new Promise((resolve, reject) => {
  try {
    database[fct](params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  } catch (e) {
    logger.error(e);
    reject(e);
  }
});

export const dynamoDB = {
  batchGetItem: params => promisify(params, 'batchGetItem'),
  batchWriteItem: params => promisify(params, 'batchWriteItem'),
  createTable: params => promisify(params, 'createTable'),
  deleteItem: params => promisify(params, 'deleteItem'),
  deleteTable: params => promisify(params, 'deleteTable'),
  describeTable: params => promisify(params, 'describeTable'),
  getItem: params => promisify(params, 'getItem'),
  listTables: params => promisify(params, 'listTables'),
  putItem: params => promisify(params, 'putItem'),
  query: params => promisify(params, 'query'),
  scan: params => promisify(params, 'scan'),
};
