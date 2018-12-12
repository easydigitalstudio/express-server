import chai, { expect } from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

global.chai = chai;
global.expect = expect;
global.sinon = sinon;

chai.use(sinonChai);
