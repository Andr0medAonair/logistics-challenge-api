export function findDate(input: string): number {
  const regex = /^(\d+\.\d{2})(\d{8})$/;
  const match = input.match(regex);

  if (!match) {
    throw new Error('Invalid input format for date extraction');
  }

  const date = match[2];
  return parseFloat(date);
}
