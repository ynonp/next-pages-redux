export type NestedPaths<T> = T extends object
  ? {
      [K in keyof T & string]:
        // 1) If this property is an array, treat as leaf
        T[K] extends (infer U)[]
          ? K
          : // 2) If it's another object, recurse
          T[K] extends object
          ? K | `${K}.${NestedPaths<T[K]>}`
          : // 3) Otherwise it's a leaf (primitive, etc.)
            K
    }[keyof T & string]
  : never;

  export type PathValue<T, Path extends string> =
  Path extends `${infer Head}.${infer Rest}`
    ? Head extends keyof T
      ? PathValue<T[Head], Rest>
      : never
    : Path extends keyof T
    ? T[Path]
    : never;

export type SetFieldPayload<T> = {
      [P in NestedPaths<T>]: {
        key: P;
        value: PathValue<T, P>;
      };
    }[NestedPaths<T>];    