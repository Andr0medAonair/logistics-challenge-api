export function convertDateStringToNumericDate(dateString: string): number {
  const numericString = dateString.replace(/-/g, '');
  return parseInt(numericString, 10);
}
