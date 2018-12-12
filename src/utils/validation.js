import mustProvide from './error';

const types = ['string', 'number', 'float', 'object', 'array'];

export default function mustBeType(type = mustProvide('type'), value = mustProvide('value')) {
  if (types.indexOf(type) === -1) throw new Error(`type ${type} not supported`);
  if (type === 'float' && typeof value === 'number') return true;
  if (type === 'array' && typeof value === 'object' && value instanceof Array) return true;
  if (type === 'object' && typeof value === 'object' && value instanceof Array) return false;
  if (typeof value === type) return true; //eslint-disable-line
  return false;
}
