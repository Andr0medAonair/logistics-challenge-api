import { OrderInput } from '../interfaces/order-input.interface';
import { UserDataEntry } from '../interfaces/user-data-entry.interface';
import { DateFormatter } from '../types';

export function groupEntriesByOrder(
  payload: UserDataEntry[],
  dateFormatter: DateFormatter,
): Record<number, OrderInput> {
  return payload.reduce<Record<number, OrderInput>>((acc, item) => {
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
