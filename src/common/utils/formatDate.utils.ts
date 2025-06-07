import { format, parse } from 'date-fns';

export function formatDate(input: string): string {
  const dateObject = parse(input, 'yyyyMMdd', new Date());
  const formattedDate = format(dateObject, 'yyyy-MM-dd');
  return formattedDate;
}
