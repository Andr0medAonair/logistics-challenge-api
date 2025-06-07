export interface PayloadValidator<T> {
  validate(data: T): void;
}
