import AWS from 'aws-sdk';

let database;

export function dynamoConnect({ region, apiVersion, auth }) {
  AWS.config.update({
    region,
    accessKeyId: auth.accessKeyId,
    secretAccessKey: auth.secretAccessKey,
  });
  database = new AWS.DynamoDB({ apiVersion });
}

export function dynamoDB() {
  return database;
}
