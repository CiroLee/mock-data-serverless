export function validateNumber(input: unknown, prefix?: string) {
  if (isNaN(Number(input))) {
    throw new Error(`${prefix}Invalid number input`);
  }
  return Number(input);
}
