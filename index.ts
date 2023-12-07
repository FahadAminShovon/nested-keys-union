type Primitive = string | number;
type PremitiveWithBoolean = Primitive | boolean;

type PrefixHelper<
  TKey extends string,
  TPrefix extends string
> = TPrefix extends '' ? TKey : `${TPrefix}.${TKey}`;

type PrefixHelperExtended<
  TKey extends string,
  TPrefix extends string
> = TPrefix extends '' ? TKey : `${TPrefix}.${TKey}` | TPrefix;

type NestedKeysMain<
  T extends Record<Primitive, any>,
  TPrefix extends string = ''
> = keyof T extends infer TKey
  ? TKey extends string
    ? NonNullable<T[TKey]> extends infer TVal
      ? TVal extends Array<PremitiveWithBoolean>
        ? TPrefix extends ''
          ? `${TKey}.${number}` | TKey
          : `${TPrefix}.${TKey}.${number}` | `${TPrefix}.${TKey}` | TPrefix
        : TVal extends Array<object>
        ?
            | NestedKeysMain<
                TVal[number],
                `${PrefixHelper<TKey, TPrefix>}.${number}`
              >
            | PrefixHelperExtended<TKey, TPrefix>
        : TVal extends object
        ? NestedKeysMain<TVal, PrefixHelper<TKey, TPrefix>>
        : TVal extends PremitiveWithBoolean
        ? PrefixHelperExtended<TKey, TPrefix>
        : never
      : never
    : never
  : never;

export type NestedKeys<T extends Record<Primitive, any>> = NestedKeysMain<T>;
