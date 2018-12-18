import { noCallThru } from 'proxyquire';

const proxyquire = noCallThru();
const updateSpy = sinon.spy();
const dynamoSpy = sinon.spy();
let data;
const functions = [
  'batchGetItem',
  'batchWriteItem',
  'createTable',
  'deleteItem',
  'deleteTable',
  'describeTable',
  'getItem',
  'listTables',
  'putItem',
  'query',
  'scan',
];

const { dynamoConnect, dynamoDB } = proxyquire('./dynamo', {
  'aws-sdk': {
    config: {
      update: updateSpy,
    },
    DynamoDB: () => {
      dynamoSpy();
    },
  },
});

describe('dynamo', () => {
  beforeEach(() => {
    updateSpy.resetHistory();
    dynamoSpy.resetHistory();
    data = {
      region: '',
      apiVersion: '',
      auth: {
        accessKeyId: '',
        secretAccessKey: '',
      },
    };
  });
  describe('dynamoConnect', () => {
    it('Should config and create the db', () => {
      dynamoConnect(data);
      expect(updateSpy).to.have.been.called; // eslint-disable-line no-unused-expressions
    });
    it('Should return the database', () => {
      expect(dynamoConnect(data)).to.deep.equal({});
    });
  });
  describe('dynamoDB', () => {
    functions.forEach((fct) => {
      it(`Should test the function ${fct}`, () => {
        const res = dynamoDB[fct];
        expect(typeof res).to.equal('function');
      });
    });
  });
});
