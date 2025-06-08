import { UserDataEntryInterface } from 'src/interfaces/user-data-entry.interface';

export function groupEntriesByUser(
  payload: UserDataEntryInterface[],
): Record<number, UserDataEntryInterface[]> {
  return payload.reduce(
    (acc, entry) => {
      if (!acc[entry.userId]) {
        acc[entry.userId] = [];
      }
      acc[entry.userId].push(entry);
      return acc;
    },
    {} as Record<number, UserDataEntryInterface[]>,
  );
}
