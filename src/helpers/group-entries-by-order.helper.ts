import { OrderInputInterface } from '../interfaces/order-input.interface';
import { UserDataEntryInterface } from '../interfaces/user-data-entry.interface';
import { DateFormatter } from '../dtos/types';

export function groupEntriesByOrder(
  payload: UserDataEntryInterface[],
  dateFormatter: DateFormatter,
): Record<number, OrderInputInterface> {
  return payload.reduce<Record<number, OrderInputInterface>>((acc, item) => {
    const { orderId, date, prodId, value } = item;

    if (!acc[orderId]) {
      acc[orderId] = {
        order_id: orderId,
        date: dateFormatter(date.toString()),
        total: 0,
        products: [],
      };
    }

    acc[orderId].total += value;
    acc[orderId].products.push({
      product_id: prodId,
      value: value.toFixed(2).toString(),
    });

    return acc;
  }, {});
}
