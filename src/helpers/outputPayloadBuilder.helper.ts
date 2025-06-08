import { UserDataEntryInterface } from '../interfaces/user-data-entry.interface';
import { UserDataInterface } from '../interfaces/user-data.interface';
import { DateFormatter } from '../validators/types';
import { finalizeOrder } from './finalizeOrderPayload.helper';
import { groupEntriesByOrder } from './groupEntriesByOrder.helper';
import { groupEntriesByUser } from './groupEntriesByUser.helper';

export function outputPayloadBuilder(
  payload: UserDataEntryInterface[],
  dateFormatter: DateFormatter,
): UserDataInterface[] {
  if (!payload || payload.length === 0) {
    return [{ user_id: 0, name: '', orders: [] }];
  }

  const groupedEntriesByUser = groupEntriesByUser(payload);

  const finalResult = Object.values(groupedEntriesByUser).map(
    (entriesForUser) => {
      const groupedOrders = groupEntriesByOrder(entriesForUser, dateFormatter);
      const finalOrders = Object.values(groupedOrders).map(finalizeOrder);

      return {
        user_id: entriesForUser[0].userId,
        name: entriesForUser[0].userName,
        orders: finalOrders,
      };
    },
  );
  return finalResult;
}
