import mustProvide from './error';

describe('error', () => {
  describe('mustProvide', () => {
    it('Should throw an error if no field provided', () => {
      expect(() => mustProvide()).to.throw('mustProvide field');
    });
    it('Should throw the field name', () => {
      expect(() => mustProvide('testField')).to.throw('testField');
    });
  });
});
