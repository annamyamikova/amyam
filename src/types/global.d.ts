declare module 'date-fns/locale/_lib/buildLocalizeFn';

/**
 * Возвращает тип объединения всех значений в объекте, массиве или массивоподобном типе `T`
 * @example
 *    type Props = { name: string; age: number; visible: boolean };
 *    // Expect: string | number | boolean
 *    type PropsValues = ValueOf<Props>;
 *
 *    type NumberArray = number[];
 *    // Expect: number
 *    type NumberItems = ValueOf<NumberArray>;
 *
 *    type ReadonlySymbolArray = readonly symbol[];
 *    // Expect: symbol
 *    type SymbolItems = ValueOf<ReadonlySymbolArray>;
 *
 *    type NumberTuple = [1, 2];
 *    // Expect: 1 | 2
 *    type NumberUnion = ValueOf<NumberTuple>;
 *
 *    type ReadonlyNumberTuple = readonly [1, 2];
 *    // Expect: 1 | 2
 *    type AnotherNumberUnion = ValueOf<NumberTuple>;
 *
 *    type BinaryArray = Uint8Array;
 *    // Expect: number
 *    type BinaryItems = ValueOf<BinaryArray>;
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
declare type ValueOf<T extends readonly any[] | ArrayLike<any> | Record<any, any>> =
  T extends readonly any[]
    ? T[number]
    : T extends ArrayLike<any>
    ? T[number]
    : T extends object
    ? T[keyof T]
    : never;

/**
 * Добавляет `null` в качестве возможного значения опциональным свойствам в типе `T`
 * @example
 *   type Props = {
 *      types?: Array<string | undefined>;
 *      age?: string | number | undefined;
 *      name: string;
 *      document?: { number?: string; series: string }
 *   };
 *
 *   // Expect: {
 *   //   types?: Array<string | null | undefined> | null | undefined;
 *   //   age?: string | number | null | undefined;
 *   //   name: string;
 *   //   document?: {
 *   //     number?: string | null | undefined;
 *   //     series: string
 *   //   } | null | undefined;
 *   // };
 *   type NullableProps = NullAsUndefined<Props>;
 */
declare type NullAsUndefined<T> = T extends object
  ? {
      [key in keyof T]: T[key] extends Array<infer Ar>
        ? Array<NullAsUndefined<Ar>>
        : T[key] extends undefined
        ? NullAsUndefined<T[key]> | null
        : NullAsUndefined<T[key]>;
    }
  : T extends undefined
  ? T | null
  : T;

/**
 * Помечает опциональными свойства в типе `T` по ключу `K`
 * @example
 *    type Props = {
 *      name: string;
 *      age: number;
 *      visible: boolean;
 *    };
 *
 *    // Expect: { name: string; age?: number; visible?: boolean; }
 *    type Props = PartialByKey<Props, 'age' | 'visible'>;
 */
declare type PartialByKey<T extends object, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

/**
 * Помечает обязательными свойства в типе `T` по ключу `K`
 * @example
 *    type Props = {
 *      name?: string;
 *      age?: number;
 *      visible?: boolean;
 *    };
 *
 *    // Expect: { name?: string; age: number; visible: boolean; }
 *    type Props = RequiredByKey<Props, 'age' | 'visible'>;
 */
declare type RequiredByKey<T extends object, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
