export function validateNumber(input: unknown) {
  if (isNaN(Number(input))) {
    throw new Error('Invalid number input');
  }
  return Number(input);
}
