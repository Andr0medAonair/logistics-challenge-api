export function adjustPrice(price: number): number {
  const priceString = price.toFixed(2);
  return parseFloat(priceString);
}
