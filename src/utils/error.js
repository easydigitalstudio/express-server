export function mustProvide(field = mustProvide('mustProvide field')) {
  const error = new Error(`required field: ${field}`);
  error.message = `required field: ${field}`;
  error.status = 500;
  throw error;
}