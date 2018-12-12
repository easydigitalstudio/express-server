import mustBeType from './validation';

describe('error', () => {
  let stringType;
  let stringValue;
  let numberType;
  let numberValue;
  let floatType;
  let floatValue;
  let objectType;
  let objectValue;
  let arrayType;
  let arrayValue;
  beforeEach(() => {
    stringValue = 'string';
    numberValue = 32;
    floatValue = 6.55957;
    objectValue = { super: 'object' };
    arrayValue = [1, 2, 3, 4];
    stringType = 'string';
    numberType = 'number';
    floatType = 'float';
    objectType = 'object';
    arrayType = 'array';
  });
  describe('mustBeType', () => {
    it('Should throw an error if no type provided', () => {
      expect(() => mustBeType()).to.throw('type');
    });
    it('Should throw an error if no value provided', () => {
      expect(() => mustBeType(stringType)).to.throw('value');
    });
    it('Should throw an error if the provided type is not supported', () => {
      expect(() => mustBeType('Unknown', stringValue)).to.throw('type Unknown not supported');
    });

    describe('String', () => {
      it('Should return false when string type is not number', () => {
        expect(mustBeType(numberType, stringValue)).equal(false);
      });
      it('Should return false when string type is not float', () => {
        expect(mustBeType(floatType, stringValue)).equal(false);
      });
      it('Should return false when string type is not object', () => {
        expect(mustBeType(objectType, stringValue)).equal(false);
      });
      it('Should return false when string type is not array', () => {
        expect(mustBeType(arrayType, stringValue)).equal(false);
      });
      it('Should return true when string type is string', () => {
        expect(mustBeType(stringType, stringValue)).equal(true);
      });
    });

    describe('Number', () => {
      it('Should return false when number type is not string', () => {
        expect(mustBeType(stringType, numberValue)).equal(false);
      });
      it('Should return true when number type is float', () => {
        expect(mustBeType(floatType, numberValue)).equal(true);
      });
      it('Should return false when number type is not object', () => {
        expect(mustBeType(objectType, numberValue)).equal(false);
      });
      it('Should return false when number type is not array', () => {
        expect(mustBeType(arrayType, numberValue)).equal(false);
      });
      it('Should return true when number type is number', () => {
        expect(mustBeType(numberType, numberValue)).equal(true);
      });
    });

    describe('Float', () => {
      it('Should return false when float type is not string', () => {
        expect(mustBeType(stringType, floatValue)).equal(false);
      });
      it('Should return true when float type is number', () => {
        expect(mustBeType(numberType, floatValue)).equal(true);
      });
      it('Should return false when float type is not object', () => {
        expect(mustBeType(objectType, floatValue)).equal(false);
      });
      it('Should return false when float type is not array', () => {
        expect(mustBeType(arrayType, floatValue)).equal(false);
      });
      it('Should return true when float type is float', () => {
        expect(mustBeType(floatType, floatValue)).equal(true);
      });
    });

    describe('Object', () => {
      it('Should return false when object type is not string', () => {
        expect(mustBeType(stringType, objectValue)).equal(false);
      });
      it('Should return false when object type is not number', () => {
        expect(mustBeType(numberType, objectValue)).equal(false);
      });
      it('Should return false when object type is not float', () => {
        expect(mustBeType(floatType, objectValue)).equal(false);
      });
      it('Should return false when object type is not array', () => {
        expect(mustBeType(arrayType, objectValue)).equal(false);
      });
      it('Should return true when object type is object', () => {
        expect(mustBeType(objectType, objectValue)).equal(true);
      });
    });

    describe('Array', () => {
      it('Should return false when array type is not string', () => {
        expect(mustBeType(stringType, arrayValue)).equal(false);
      });
      it('Should return false when array type is not number', () => {
        expect(mustBeType(numberType, arrayValue)).equal(false);
      });
      it('Should return false when array type is not float', () => {
        expect(mustBeType(floatType, arrayValue)).equal(false);
      });
      it('Should return false when array type is not object', () => {
        expect(mustBeType(objectType, arrayValue)).equal(false);
      });
      it('Should return true when array type is array', () => {
        expect(mustBeType(arrayType, arrayValue)).equal(true);
      });
    });
  });
});
