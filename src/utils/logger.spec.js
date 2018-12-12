import { logOptions } from './logger';

describe('logger', () => {
  it('Should return the right logOptions', () => {
    expect(logOptions.timestamp()).to.equal(new Date().toISOString());
    expect(logOptions.formatter({
      level: 'test',
      timestamp: () => 'time',
      message: 'my message',
    })).to.deep.equal(JSON.stringify({
      level: 'test',
      timestamp: 'time',
      message: 'my message',
    }));
  });
  it('Should return the right logOptions', () => {
    expect(logOptions.timestamp()).to.equal(new Date().toISOString());
    expect(logOptions.formatter({
      level: 'test',
      timestamp: () => 'time',
    })).to.deep.equal(JSON.stringify({
      level: 'test',
      timestamp: 'time',
    }));
  });
});
