/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsBefore', async: false })
export class IsBeforeConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints as string[];
    const relatedValue = (args.object as Record<string, any>)[
      relatedPropertyName
    ];

    if (!relatedValue) {
      return true;
    }

    if (typeof value !== 'string' || typeof relatedValue !== 'string') {
      return false;
    }

    return new Date(value) < new Date(relatedValue);
  }

  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints as string[];
    return `${args.property} deve ser anterior à ${relatedPropertyName}`;
  }
}
