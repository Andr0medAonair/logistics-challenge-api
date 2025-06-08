import { OrderInputInterface } from '../interfaces/order-input.interface';
import { OrderInterface } from '../interfaces/order.interface';

export function finalizeOrder(order: OrderInputInterface): OrderInterface {
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
