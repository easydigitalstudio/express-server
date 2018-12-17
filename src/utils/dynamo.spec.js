import { noCallThru } from 'proxyquire';

const proxyquire = noCallThru();
const updateSpy = sinon.spy();
const dynamoSpy = sinon.spy();
let data;

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
  });
  describe('dynamoDB', () => {
    it('Should return the database', () => {
      dynamoConnect(data);
      expect(typeof dynamoDB()).to.equal('object');
    });
  });
});
