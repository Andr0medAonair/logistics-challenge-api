import { UserDataEntry } from '../interfaces/user-data-entry.interface';
import { UserData } from '../interfaces/user-data.interface';
import { DateFormatter } from '../types';
import { finalizeOrder } from './finalizeOrderPayload.helper';
import { groupEntriesByOrder } from './groupEntriesByOrder.helper';

export function outputPayloadBuilder(
  payload: UserDataEntry[],
  dateFormatter: DateFormatter,
): UserData {
  if (!payload || payload.length === 0) {
    return { user_id: 0, name: '', orders: [] };
  }

  const user_id = payload[0].userId;
  const name = payload[0].userName;

  const groupedOrders = groupEntriesByOrder(payload, dateFormatter);

  const finalOrders = Object.values(groupedOrders).map(finalizeOrder);

  return {
    user_id,
    name,
    orders: finalOrders,
  };
}
