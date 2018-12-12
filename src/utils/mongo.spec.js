import { noCallThru } from 'proxyquire';

const proxyquire = noCallThru();
const mongoClient = sinon.spy();
const mongoURL = 'mongoURL';

const db = {
  on: (action, callback) => {
    callback();
    return db;
  },
  collection: collectionName => `right ${collectionName}`,
};

const { mongoConnect, mongoCollection } = proxyquire('./mongo', {
  mongodb: {
    MongoClient: {
      connect: () => {
        mongoClient();
        return new Promise((resolve) => {
          resolve(db);
        });
      },
    },
  },
});

describe('mongo', () => {
  beforeEach(() => {
    mongoClient.resetHistory();
  });
  describe('mongoConnect', () => {
    it('Should start the db', () => {
      mongoConnect(mongoURL);
      expect(mongoClient).to.have.been.called; // eslint-disable-line no-unused-expressions
    });
  });
  describe('mongoCollection', () => {
    it('Should throw an error if no collectionName', () => {
      expect(() => mongoCollection()).to.throw('collectionName');
    });
    it('Should return the db', () => {
      mongoConnect();
      expect(mongoCollection('test')).to.equal('right test');
    });
  });
});
