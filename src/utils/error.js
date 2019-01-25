export default function mustProvide(
  field = mustProvide('mustProvide field'),
  status = 422,
) {
  const error = new Error(`required field: ${field}`);
  error.message = `required field: ${field}`;
  error.status = status;
  throw error;
}
