import { Logger } from '@nestjs/common';
import { UserDataEntry } from 'src/models/orders/entities/user-data-entry.entity';

export function txtToJsonConverter(rawPayload: string): UserDataEntry[] {
  console.log(rawPayload);
  const results: UserDataEntry[] = [];
  const lines = rawPayload.split('\n');

  for (const line of lines) {
    if (line.length < 95) {
      Logger.warn(
        '[txtToJsonConverter] - A seguinte linha não será parseada pois está incompleta:',
        line,
      );
      continue;
    }

    try {
      const userIdStr = line.substring(0, 10);
      const nameStr = line.substring(10, 55);
      const orderIdStr = line.substring(55, 65);
      const productIdStr = line.substring(65, 75);
      const priceStr = line.substring(75, 87);
      const dateStr = line.substring(87, 95);

      const order: UserDataEntry = {
        userId: parseInt(userIdStr, 10),
        userName: nameStr.trim(),
        orderId: parseInt(orderIdStr, 10),
        prodId: parseInt(productIdStr, 10),
        value: parseFloat(priceStr.trim()),
        date: parseInt(dateStr, 10),
      };

      results.push(order);
    } catch (error) {
      Logger.error(
        '[txtToJsonConverter] - Operação de parsing falhou:',
        line,
        error,
      );
    }
  }

  return results;
}
