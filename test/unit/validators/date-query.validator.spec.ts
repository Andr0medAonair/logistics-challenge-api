/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ValidationArguments } from 'class-validator';
import { IsBeforeConstraint } from 'src/validators/date-query.validator';

describe('IsBeforeConstraint', () => {
  let isBeforeConstraint: IsBeforeConstraint;

  beforeEach(() => {
    isBeforeConstraint = new IsBeforeConstraint();
  });

  const createMockArgs = (
    value: any,
    relatedValue: any,
    relatedPropertyName = 'endDate',
  ): ValidationArguments => ({
    value,
    constraints: [relatedPropertyName],
    targetName: 'DateQueryDto',
    object: {
      [relatedPropertyName]: relatedValue,
    },
    property: 'startDate',
  });

  describe('validate', () => {
    it('should return true when the date is before the related date', () => {
      const args = createMockArgs('2025-06-08', '2025-06-09');

      expect(isBeforeConstraint.validate('2025-06-08', args)).toBe(true);
    });

    it('should return false when the date is after the related date', () => {
      const args = createMockArgs('2025-06-10', '2025-06-09');

      expect(isBeforeConstraint.validate('2025-06-10', args)).toBe(false);
    });

    it('should return false when the dates are the same', () => {
      const args = createMockArgs('2025-06-09', '2025-06-09');

      expect(isBeforeConstraint.validate('2025-06-09', args)).toBe(false);
    });

    it('should return true if the related value is null or undefined', () => {
      const argsUndefined = createMockArgs('2025-06-09', undefined);
      const argsNull = createMockArgs('2025-06-09', null);

      expect(isBeforeConstraint.validate('2025-06-09', argsUndefined)).toBe(
        true,
      );
      expect(isBeforeConstraint.validate('2025-06-09', argsNull)).toBe(true);
    });

    it('should return false if the value is not a valid string', () => {
      const args = createMockArgs(12345, '2025-06-09');

      expect(isBeforeConstraint.validate(12345, args)).toBe(false);
    });

    it('should return false if the related value is not a valid string', () => {
      const args = createMockArgs('2025-06-09', { date: '2025-06-10' });

      expect(isBeforeConstraint.validate('2025-06-09', args)).toBe(false);
    });
  });

  describe('defaultMessage', () => {
    it('should return the correct default error message', () => {
      const args = createMockArgs(null, null, 'endDate');
      const expectedMessage = 'startDate deve ser anterior à endDate';

      expect(isBeforeConstraint.defaultMessage(args)).toBe(expectedMessage);
    });
  });
});
