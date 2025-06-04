export function findOrderId(input: string): string {
  const regex = /^(.+?)(\d{10})(\d{10})$/;
  const match = input.match(regex) ?? '';
  const orderId = match[2] ?? '';
  return orderId;
}
