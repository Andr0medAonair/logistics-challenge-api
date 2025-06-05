export function findPrice(input: string): number {
  const regex = /^(\d+\.\d{2})(\d{8})$/;
  const match = input.match(regex);

  if (!match) {
    throw new Error('Invalid input format for price extraction');
  }

  const price = match[1];
  return parseFloat(price);
}
