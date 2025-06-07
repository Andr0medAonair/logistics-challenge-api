import { UserDataEntryInterface } from '../interfaces/user-data-entry.interface';
import { PayloadValidator } from '../interfaces/validation.interface';

export class ValidationUtils
  implements PayloadValidator<UserDataEntryInterface[]>
{
  public validate(payload: UserDataEntryInterface[]): void {
    if (!payload || payload.length === 0) {
      throw new Error('Validation Error: Payload cannot be null or empty.');
    }

    payload.forEach((entry, index) => {
      if (!entry.userId || entry.userId <= 0) {
        throw new Error(`Validation Error: Invalid userId at index ${index}.`);
      }
      if (!entry.userName) {
        throw new Error(
          `Validation Error: Invalid userName at index ${index}.`,
        );
      }
    });
  }
}
