import getConfig from './config';

describe('config', () => {
  describe('getConfig', () => {
    it('Should throw an error if no field provided', () => {
      expect(() => getConfig()).to.throw('field');
    });
    it('Should throw the field name', () => {
      expect(() => getConfig('envVar')).to.throw('The environment variable envVar should be upper case');
    });
    it('Should return undefined', () => {
      expect(getConfig('TEST_ENV_VAR')).to.equal();
    });
  });
});
