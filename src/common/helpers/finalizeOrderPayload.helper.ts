import { OrderInput } from '../interfaces/order-input.interface';
import { Order } from '../interfaces/order.interface';

export function finalizeOrder(order: OrderInput): Order {
  const sortedProducts = [...order.products].sort(
    (a, b) => a.product_id - b.product_id,
  );

  const roundedTotal = order.total.toFixed(2);

  const payload = {
    ...order,
    total: roundedTotal.toString(),
    products: sortedProducts,
  };

  return payload;
}
