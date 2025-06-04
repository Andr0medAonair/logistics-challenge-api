export function findName(input: string): string {
  const regex = /^([^\d]+)(\d+)$/;
  const match = input.match(regex) ?? '';
  const name = match[1] ?? '';
  return name;
}
