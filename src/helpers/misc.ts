import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const doNothing = (): void => {};

/**
 * Конвертирует переданную строку в число
 */
export const toNumber = (value: string | undefined = ''): number | undefined =>
  isNaN(parseFloat(<string>value)) ? undefined : parseFloat(<string>value);

export const isString = (value: unknown): value is string => typeof value === 'string';

// См. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
export const isObject = (value: unknown): value is object =>
  Object.prototype.toString.call(value) === '[object Object]';

/**
 * Проверяет, что переданное значение не `null` и не `undefined`
 */
export const isNotEmpty = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined;

/**
 * Проверяет, что переданное значение `null` или `undefined`
 */
export const isEmpty = <T>(value: T | null | undefined): value is null | undefined =>
  !isNotEmpty(value);

/**
 * Проверяет, что передана непустая строка
 */
export const isStringNotEmpty = <T extends string>(value: T | undefined | null): value is T =>
  (value ?? '').trim() !== '';

/**
 * Проверяет, что в переданном массиве больше одного элемента
 */
export const isArrayNotEmpty = <T>(array?: T[] | undefined | null): array is T[] =>
  (array ?? []).length > 0;

/**
 * Проверяет, что передан объект у которого заполнено хотя бы одно поле
 */
export const isObjectNotEmpty = <T extends object>(obj: T | undefined | null): obj is T =>
  Object.values(obj ?? {}).some(isNotEmpty);

export const isReactNodeNotEmpty = (v: ReactNode): boolean => isNotEmpty(v) && v !== false;

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (value: unknown): value is Function => typeof value === 'function';

export const isNumberInteger = (value: number): boolean => value % 1 === 0;
