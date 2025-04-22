
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model genres
 * 
 */
export type genres = $Result.DefaultSelection<Prisma.$genresPayload>
/**
 * Model languages
 * 
 */
export type languages = $Result.DefaultSelection<Prisma.$languagesPayload>
/**
 * Model movies
 * 
 */
export type movies = $Result.DefaultSelection<Prisma.$moviesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Genres
 * const genres = await prisma.genres.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Genres
   * const genres = await prisma.genres.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.genres`: Exposes CRUD operations for the **genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.genresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.languages`: Exposes CRUD operations for the **languages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.languages.findMany()
    * ```
    */
  get languages(): Prisma.languagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movies`: Exposes CRUD operations for the **movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.moviesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    genres: 'genres',
    languages: 'languages',
    movies: 'movies'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "genres" | "languages" | "movies"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      genres: {
        payload: Prisma.$genresPayload<ExtArgs>
        fields: Prisma.genresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.genresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.genresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findFirst: {
            args: Prisma.genresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.genresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          findMany: {
            args: Prisma.genresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          create: {
            args: Prisma.genresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          createMany: {
            args: Prisma.genresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.genresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          delete: {
            args: Prisma.genresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          update: {
            args: Prisma.genresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          deleteMany: {
            args: Prisma.genresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.genresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.genresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>[]
          }
          upsert: {
            args: Prisma.genresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$genresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.genresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.genresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      languages: {
        payload: Prisma.$languagesPayload<ExtArgs>
        fields: Prisma.languagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.languagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.languagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>
          }
          findFirst: {
            args: Prisma.languagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.languagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>
          }
          findMany: {
            args: Prisma.languagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>[]
          }
          create: {
            args: Prisma.languagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>
          }
          createMany: {
            args: Prisma.languagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.languagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>[]
          }
          delete: {
            args: Prisma.languagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>
          }
          update: {
            args: Prisma.languagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>
          }
          deleteMany: {
            args: Prisma.languagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.languagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.languagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>[]
          }
          upsert: {
            args: Prisma.languagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$languagesPayload>
          }
          aggregate: {
            args: Prisma.LanguagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguages>
          }
          groupBy: {
            args: Prisma.languagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.languagesCountArgs<ExtArgs>
            result: $Utils.Optional<LanguagesCountAggregateOutputType> | number
          }
        }
      }
      movies: {
        payload: Prisma.$moviesPayload<ExtArgs>
        fields: Prisma.moviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moviesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moviesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findFirst: {
            args: Prisma.moviesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moviesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          findMany: {
            args: Prisma.moviesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          create: {
            args: Prisma.moviesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          createMany: {
            args: Prisma.moviesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moviesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          delete: {
            args: Prisma.moviesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          update: {
            args: Prisma.moviesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          deleteMany: {
            args: Prisma.moviesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moviesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moviesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>[]
          }
          upsert: {
            args: Prisma.moviesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$moviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.moviesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.moviesCountArgs<ExtArgs>
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    genres?: genresOmit
    languages?: languagesOmit
    movies?: moviesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    movies: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | GenresCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }


  /**
   * Count Type LanguagesCountOutputType
   */

  export type LanguagesCountOutputType = {
    movies: number
  }

  export type LanguagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | LanguagesCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguagesCountOutputType
     */
    select?: LanguagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguagesCountOutputType without action
   */
  export type LanguagesCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresAvgAggregateOutputType = {
    id: number | null
  }

  export type GenresSumAggregateOutputType = {
    id: number | null
  }

  export type GenresMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenresAvgAggregateInputType = {
    id?: true
  }

  export type GenresSumAggregateInputType = {
    id?: true
  }

  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to aggregate.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type genresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: genresWhereInput
    orderBy?: genresOrderByWithAggregationInput | genresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: genresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _avg?: GenresAvgAggregateInputType
    _sum?: GenresSumAggregateInputType
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: number
    name: string | null
    _count: GenresCountAggregateOutputType | null
    _avg: GenresAvgAggregateOutputType | null
    _sum: GenresSumAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends genresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type genresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | genres$moviesArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type genresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type genresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type genresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genres"]>
  export type genresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | genres$moviesArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type genresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type genresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $genresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "genres"
    objects: {
      movies: Prisma.$moviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type genresGetPayload<S extends boolean | null | undefined | genresDefaultArgs> = $Result.GetResult<Prisma.$genresPayload, S>

  type genresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<genresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface genresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['genres'], meta: { name: 'genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {genresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends genresFindUniqueArgs>(args: SelectSubset<T, genresFindUniqueArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {genresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends genresFindUniqueOrThrowArgs>(args: SelectSubset<T, genresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends genresFindFirstArgs>(args?: SelectSubset<T, genresFindFirstArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends genresFindFirstOrThrowArgs>(args?: SelectSubset<T, genresFindFirstOrThrowArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends genresFindManyArgs>(args?: SelectSubset<T, genresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {genresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends genresCreateArgs>(args: SelectSubset<T, genresCreateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {genresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends genresCreateManyArgs>(args?: SelectSubset<T, genresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {genresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends genresCreateManyAndReturnArgs>(args?: SelectSubset<T, genresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {genresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends genresDeleteArgs>(args: SelectSubset<T, genresDeleteArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {genresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends genresUpdateArgs>(args: SelectSubset<T, genresUpdateArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {genresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends genresDeleteManyArgs>(args?: SelectSubset<T, genresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends genresUpdateManyArgs>(args: SelectSubset<T, genresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {genresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends genresUpdateManyAndReturnArgs>(args: SelectSubset<T, genresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {genresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends genresUpsertArgs>(args: SelectSubset<T, genresUpsertArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends genresCountArgs>(
      args?: Subset<T, genresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {genresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends genresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: genresGroupByArgs['orderBy'] }
        : { orderBy?: genresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, genresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the genres model
   */
  readonly fields: genresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__genresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends genres$moviesArgs<ExtArgs> = {}>(args?: Subset<T, genres$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the genres model
   */
  interface genresFieldRefs {
    readonly id: FieldRef<"genres", 'Int'>
    readonly name: FieldRef<"genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * genres findUnique
   */
  export type genresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findUniqueOrThrow
   */
  export type genresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres findFirst
   */
  export type genresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findFirstOrThrow
   */
  export type genresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres findMany
   */
  export type genresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter, which genres to fetch.
     */
    where?: genresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of genres to fetch.
     */
    orderBy?: genresOrderByWithRelationInput | genresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing genres.
     */
    cursor?: genresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * genres create
   */
  export type genresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to create a genres.
     */
    data?: XOR<genresCreateInput, genresUncheckedCreateInput>
  }

  /**
   * genres createMany
   */
  export type genresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres createManyAndReturn
   */
  export type genresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to create many genres.
     */
    data: genresCreateManyInput | genresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * genres update
   */
  export type genresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The data needed to update a genres.
     */
    data: XOR<genresUpdateInput, genresUncheckedUpdateInput>
    /**
     * Choose, which genres to update.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres updateMany
   */
  export type genresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres updateManyAndReturn
   */
  export type genresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * The data used to update genres.
     */
    data: XOR<genresUpdateManyMutationInput, genresUncheckedUpdateManyInput>
    /**
     * Filter which genres to update
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to update.
     */
    limit?: number
  }

  /**
   * genres upsert
   */
  export type genresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * The filter to search for the genres to update in case it exists.
     */
    where: genresWhereUniqueInput
    /**
     * In case the genres found by the `where` argument doesn't exist, create a new genres with this data.
     */
    create: XOR<genresCreateInput, genresUncheckedCreateInput>
    /**
     * In case the genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<genresUpdateInput, genresUncheckedUpdateInput>
  }

  /**
   * genres delete
   */
  export type genresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    /**
     * Filter which genres to delete.
     */
    where: genresWhereUniqueInput
  }

  /**
   * genres deleteMany
   */
  export type genresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which genres to delete
     */
    where?: genresWhereInput
    /**
     * Limit how many genres to delete.
     */
    limit?: number
  }

  /**
   * genres.movies
   */
  export type genres$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * genres without action
   */
  export type genresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
  }


  /**
   * Model languages
   */

  export type AggregateLanguages = {
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  export type LanguagesAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguagesSumAggregateOutputType = {
    id: number | null
  }

  export type LanguagesMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LanguagesMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LanguagesCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LanguagesAvgAggregateInputType = {
    id?: true
  }

  export type LanguagesSumAggregateInputType = {
    id?: true
  }

  export type LanguagesMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LanguagesMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LanguagesCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LanguagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which languages to aggregate.
     */
    where?: languagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languagesOrderByWithRelationInput | languagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: languagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned languages
    **/
    _count?: true | LanguagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguagesMaxAggregateInputType
  }

  export type GetLanguagesAggregateType<T extends LanguagesAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguages[P]>
      : GetScalarType<T[P], AggregateLanguages[P]>
  }




  export type languagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: languagesWhereInput
    orderBy?: languagesOrderByWithAggregationInput | languagesOrderByWithAggregationInput[]
    by: LanguagesScalarFieldEnum[] | LanguagesScalarFieldEnum
    having?: languagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguagesCountAggregateInputType | true
    _avg?: LanguagesAvgAggregateInputType
    _sum?: LanguagesSumAggregateInputType
    _min?: LanguagesMinAggregateInputType
    _max?: LanguagesMaxAggregateInputType
  }

  export type LanguagesGroupByOutputType = {
    id: number
    name: string | null
    _count: LanguagesCountAggregateOutputType | null
    _avg: LanguagesAvgAggregateOutputType | null
    _sum: LanguagesSumAggregateOutputType | null
    _min: LanguagesMinAggregateOutputType | null
    _max: LanguagesMaxAggregateOutputType | null
  }

  type GetLanguagesGroupByPayload<T extends languagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
            : GetScalarType<T[P], LanguagesGroupByOutputType[P]>
        }
      >
    >


  export type languagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | languages$moviesArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["languages"]>

  export type languagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["languages"]>

  export type languagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["languages"]>

  export type languagesSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type languagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["languages"]>
  export type languagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | languages$moviesArgs<ExtArgs>
    _count?: boolean | LanguagesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type languagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type languagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $languagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "languages"
    objects: {
      movies: Prisma.$moviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["languages"]>
    composites: {}
  }

  type languagesGetPayload<S extends boolean | null | undefined | languagesDefaultArgs> = $Result.GetResult<Prisma.$languagesPayload, S>

  type languagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<languagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguagesCountAggregateInputType | true
    }

  export interface languagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['languages'], meta: { name: 'languages' } }
    /**
     * Find zero or one Languages that matches the filter.
     * @param {languagesFindUniqueArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends languagesFindUniqueArgs>(args: SelectSubset<T, languagesFindUniqueArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Languages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {languagesFindUniqueOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends languagesFindUniqueOrThrowArgs>(args: SelectSubset<T, languagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languagesFindFirstArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends languagesFindFirstArgs>(args?: SelectSubset<T, languagesFindFirstArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Languages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languagesFindFirstOrThrowArgs} args - Arguments to find a Languages
     * @example
     * // Get one Languages
     * const languages = await prisma.languages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends languagesFindFirstOrThrowArgs>(args?: SelectSubset<T, languagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.languages.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.languages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languagesWithIdOnly = await prisma.languages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends languagesFindManyArgs>(args?: SelectSubset<T, languagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Languages.
     * @param {languagesCreateArgs} args - Arguments to create a Languages.
     * @example
     * // Create one Languages
     * const Languages = await prisma.languages.create({
     *   data: {
     *     // ... data to create a Languages
     *   }
     * })
     * 
     */
    create<T extends languagesCreateArgs>(args: SelectSubset<T, languagesCreateArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {languagesCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends languagesCreateManyArgs>(args?: SelectSubset<T, languagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {languagesCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const languages = await prisma.languages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languagesWithIdOnly = await prisma.languages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends languagesCreateManyAndReturnArgs>(args?: SelectSubset<T, languagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Languages.
     * @param {languagesDeleteArgs} args - Arguments to delete one Languages.
     * @example
     * // Delete one Languages
     * const Languages = await prisma.languages.delete({
     *   where: {
     *     // ... filter to delete one Languages
     *   }
     * })
     * 
     */
    delete<T extends languagesDeleteArgs>(args: SelectSubset<T, languagesDeleteArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Languages.
     * @param {languagesUpdateArgs} args - Arguments to update one Languages.
     * @example
     * // Update one Languages
     * const languages = await prisma.languages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends languagesUpdateArgs>(args: SelectSubset<T, languagesUpdateArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {languagesDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.languages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends languagesDeleteManyArgs>(args?: SelectSubset<T, languagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends languagesUpdateManyArgs>(args: SelectSubset<T, languagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {languagesUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const languages = await prisma.languages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languagesWithIdOnly = await prisma.languages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends languagesUpdateManyAndReturnArgs>(args: SelectSubset<T, languagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Languages.
     * @param {languagesUpsertArgs} args - Arguments to update or create a Languages.
     * @example
     * // Update or create a Languages
     * const languages = await prisma.languages.upsert({
     *   create: {
     *     // ... data to create a Languages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Languages we want to update
     *   }
     * })
     */
    upsert<T extends languagesUpsertArgs>(args: SelectSubset<T, languagesUpsertArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languagesCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.languages.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends languagesCountArgs>(
      args?: Subset<T, languagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguagesAggregateArgs>(args: Subset<T, LanguagesAggregateArgs>): Prisma.PrismaPromise<GetLanguagesAggregateType<T>>

    /**
     * Group by Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {languagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends languagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: languagesGroupByArgs['orderBy'] }
        : { orderBy?: languagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, languagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the languages model
   */
  readonly fields: languagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for languages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__languagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends languages$moviesArgs<ExtArgs> = {}>(args?: Subset<T, languages$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the languages model
   */
  interface languagesFieldRefs {
    readonly id: FieldRef<"languages", 'Int'>
    readonly name: FieldRef<"languages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * languages findUnique
   */
  export type languagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * Filter, which languages to fetch.
     */
    where: languagesWhereUniqueInput
  }

  /**
   * languages findUniqueOrThrow
   */
  export type languagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * Filter, which languages to fetch.
     */
    where: languagesWhereUniqueInput
  }

  /**
   * languages findFirst
   */
  export type languagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * Filter, which languages to fetch.
     */
    where?: languagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languagesOrderByWithRelationInput | languagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for languages.
     */
    cursor?: languagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * languages findFirstOrThrow
   */
  export type languagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * Filter, which languages to fetch.
     */
    where?: languagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languagesOrderByWithRelationInput | languagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for languages.
     */
    cursor?: languagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of languages.
     */
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * languages findMany
   */
  export type languagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * Filter, which languages to fetch.
     */
    where?: languagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of languages to fetch.
     */
    orderBy?: languagesOrderByWithRelationInput | languagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing languages.
     */
    cursor?: languagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` languages.
     */
    skip?: number
    distinct?: LanguagesScalarFieldEnum | LanguagesScalarFieldEnum[]
  }

  /**
   * languages create
   */
  export type languagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * The data needed to create a languages.
     */
    data?: XOR<languagesCreateInput, languagesUncheckedCreateInput>
  }

  /**
   * languages createMany
   */
  export type languagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many languages.
     */
    data: languagesCreateManyInput | languagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * languages createManyAndReturn
   */
  export type languagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * The data used to create many languages.
     */
    data: languagesCreateManyInput | languagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * languages update
   */
  export type languagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * The data needed to update a languages.
     */
    data: XOR<languagesUpdateInput, languagesUncheckedUpdateInput>
    /**
     * Choose, which languages to update.
     */
    where: languagesWhereUniqueInput
  }

  /**
   * languages updateMany
   */
  export type languagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update languages.
     */
    data: XOR<languagesUpdateManyMutationInput, languagesUncheckedUpdateManyInput>
    /**
     * Filter which languages to update
     */
    where?: languagesWhereInput
    /**
     * Limit how many languages to update.
     */
    limit?: number
  }

  /**
   * languages updateManyAndReturn
   */
  export type languagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * The data used to update languages.
     */
    data: XOR<languagesUpdateManyMutationInput, languagesUncheckedUpdateManyInput>
    /**
     * Filter which languages to update
     */
    where?: languagesWhereInput
    /**
     * Limit how many languages to update.
     */
    limit?: number
  }

  /**
   * languages upsert
   */
  export type languagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * The filter to search for the languages to update in case it exists.
     */
    where: languagesWhereUniqueInput
    /**
     * In case the languages found by the `where` argument doesn't exist, create a new languages with this data.
     */
    create: XOR<languagesCreateInput, languagesUncheckedCreateInput>
    /**
     * In case the languages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<languagesUpdateInput, languagesUncheckedUpdateInput>
  }

  /**
   * languages delete
   */
  export type languagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    /**
     * Filter which languages to delete.
     */
    where: languagesWhereUniqueInput
  }

  /**
   * languages deleteMany
   */
  export type languagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which languages to delete
     */
    where?: languagesWhereInput
    /**
     * Limit how many languages to delete.
     */
    limit?: number
  }

  /**
   * languages.movies
   */
  export type languages$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    cursor?: moviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * languages without action
   */
  export type languagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
  }


  /**
   * Model movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    genre_id: number | null
    language_id: number | null
    oscar_count: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    genre_id: number | null
    language_id: number | null
    oscar_count: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    title: string | null
    release_date: Date | null
    genre_id: number | null
    language_id: number | null
    oscar_count: number | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    release_date: Date | null
    genre_id: number | null
    language_id: number | null
    oscar_count: number | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    title: number
    release_date: number
    genre_id: number
    language_id: number
    oscar_count: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    genre_id?: true
    language_id?: true
    oscar_count?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    genre_id?: true
    language_id?: true
    oscar_count?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    title?: true
    release_date?: true
    genre_id?: true
    language_id?: true
    oscar_count?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    title?: true
    release_date?: true
    genre_id?: true
    language_id?: true
    oscar_count?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    title?: true
    release_date?: true
    genre_id?: true
    language_id?: true
    oscar_count?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to aggregate.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned movies
    **/
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type moviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moviesWhereInput
    orderBy?: moviesOrderByWithAggregationInput | moviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: moviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    title: string | null
    release_date: Date | null
    genre_id: number | null
    language_id: number | null
    oscar_count: number | null
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends moviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type moviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    release_date?: boolean
    genre_id?: boolean
    language_id?: boolean
    oscar_count?: boolean
    genres?: boolean | movies$genresArgs<ExtArgs>
    languages?: boolean | movies$languagesArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    release_date?: boolean
    genre_id?: boolean
    language_id?: boolean
    oscar_count?: boolean
    genres?: boolean | movies$genresArgs<ExtArgs>
    languages?: boolean | movies$languagesArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    release_date?: boolean
    genre_id?: boolean
    language_id?: boolean
    oscar_count?: boolean
    genres?: boolean | movies$genresArgs<ExtArgs>
    languages?: boolean | movies$languagesArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type moviesSelectScalar = {
    id?: boolean
    title?: boolean
    release_date?: boolean
    genre_id?: boolean
    language_id?: boolean
    oscar_count?: boolean
  }

  export type moviesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "release_date" | "genre_id" | "language_id" | "oscar_count", ExtArgs["result"]["movies"]>
  export type moviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | movies$genresArgs<ExtArgs>
    languages?: boolean | movies$languagesArgs<ExtArgs>
  }
  export type moviesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | movies$genresArgs<ExtArgs>
    languages?: boolean | movies$languagesArgs<ExtArgs>
  }
  export type moviesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | movies$genresArgs<ExtArgs>
    languages?: boolean | movies$languagesArgs<ExtArgs>
  }

  export type $moviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "movies"
    objects: {
      genres: Prisma.$genresPayload<ExtArgs> | null
      languages: Prisma.$languagesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      release_date: Date | null
      genre_id: number | null
      language_id: number | null
      oscar_count: number | null
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }

  type moviesGetPayload<S extends boolean | null | undefined | moviesDefaultArgs> = $Result.GetResult<Prisma.$moviesPayload, S>

  type moviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moviesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface moviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['movies'], meta: { name: 'movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {moviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moviesFindUniqueArgs>(args: SelectSubset<T, moviesFindUniqueArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moviesFindUniqueOrThrowArgs>(args: SelectSubset<T, moviesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moviesFindFirstArgs>(args?: SelectSubset<T, moviesFindFirstArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moviesFindFirstOrThrowArgs>(args?: SelectSubset<T, moviesFindFirstOrThrowArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends moviesFindManyArgs>(args?: SelectSubset<T, moviesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movies.
     * @param {moviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
     */
    create<T extends moviesCreateArgs>(args: SelectSubset<T, moviesCreateArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {moviesCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moviesCreateManyArgs>(args?: SelectSubset<T, moviesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {moviesCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movies = await prisma.movies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moviesCreateManyAndReturnArgs>(args?: SelectSubset<T, moviesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movies.
     * @param {moviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
     */
    delete<T extends moviesDeleteArgs>(args: SelectSubset<T, moviesDeleteArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movies.
     * @param {moviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moviesUpdateArgs>(args: SelectSubset<T, moviesUpdateArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {moviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moviesDeleteManyArgs>(args?: SelectSubset<T, moviesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moviesUpdateManyArgs>(args: SelectSubset<T, moviesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {moviesUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const moviesWithIdOnly = await prisma.movies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends moviesUpdateManyAndReturnArgs>(args: SelectSubset<T, moviesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movies.
     * @param {moviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
     */
    upsert<T extends moviesUpsertArgs>(args: SelectSubset<T, moviesUpsertArgs<ExtArgs>>): Prisma__moviesClient<$Result.GetResult<Prisma.$moviesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends moviesCountArgs>(
      args?: Subset<T, moviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moviesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends moviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moviesGroupByArgs['orderBy'] }
        : { orderBy?: moviesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, moviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the movies model
   */
  readonly fields: moviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends movies$genresArgs<ExtArgs> = {}>(args?: Subset<T, movies$genresArgs<ExtArgs>>): Prisma__genresClient<$Result.GetResult<Prisma.$genresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    languages<T extends movies$languagesArgs<ExtArgs> = {}>(args?: Subset<T, movies$languagesArgs<ExtArgs>>): Prisma__languagesClient<$Result.GetResult<Prisma.$languagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the movies model
   */
  interface moviesFieldRefs {
    readonly id: FieldRef<"movies", 'Int'>
    readonly title: FieldRef<"movies", 'String'>
    readonly release_date: FieldRef<"movies", 'DateTime'>
    readonly genre_id: FieldRef<"movies", 'Int'>
    readonly language_id: FieldRef<"movies", 'Int'>
    readonly oscar_count: FieldRef<"movies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * movies findUnique
   */
  export type moviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies findUniqueOrThrow
   */
  export type moviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies findFirst
   */
  export type moviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies findFirstOrThrow
   */
  export type moviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of movies.
     */
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies findMany
   */
  export type moviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter, which movies to fetch.
     */
    where?: moviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of movies to fetch.
     */
    orderBy?: moviesOrderByWithRelationInput | moviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing movies.
     */
    cursor?: moviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` movies.
     */
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * movies create
   */
  export type moviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to create a movies.
     */
    data?: XOR<moviesCreateInput, moviesUncheckedCreateInput>
  }

  /**
   * movies createMany
   */
  export type moviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * movies createManyAndReturn
   */
  export type moviesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * The data used to create many movies.
     */
    data: moviesCreateManyInput | moviesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * movies update
   */
  export type moviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The data needed to update a movies.
     */
    data: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
    /**
     * Choose, which movies to update.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies updateMany
   */
  export type moviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
  }

  /**
   * movies updateManyAndReturn
   */
  export type moviesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * The data used to update movies.
     */
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyInput>
    /**
     * Filter which movies to update
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * movies upsert
   */
  export type moviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * The filter to search for the movies to update in case it exists.
     */
    where: moviesWhereUniqueInput
    /**
     * In case the movies found by the `where` argument doesn't exist, create a new movies with this data.
     */
    create: XOR<moviesCreateInput, moviesUncheckedCreateInput>
    /**
     * In case the movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moviesUpdateInput, moviesUncheckedUpdateInput>
  }

  /**
   * movies delete
   */
  export type moviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
    /**
     * Filter which movies to delete.
     */
    where: moviesWhereUniqueInput
  }

  /**
   * movies deleteMany
   */
  export type moviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which movies to delete
     */
    where?: moviesWhereInput
    /**
     * Limit how many movies to delete.
     */
    limit?: number
  }

  /**
   * movies.genres
   */
  export type movies$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the genres
     */
    select?: genresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the genres
     */
    omit?: genresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: genresInclude<ExtArgs> | null
    where?: genresWhereInput
  }

  /**
   * movies.languages
   */
  export type movies$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the languages
     */
    select?: languagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the languages
     */
    omit?: languagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: languagesInclude<ExtArgs> | null
    where?: languagesWhereInput
  }

  /**
   * movies without action
   */
  export type moviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movies
     */
    select?: moviesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the movies
     */
    omit?: moviesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moviesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const LanguagesScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LanguagesScalarFieldEnum = (typeof LanguagesScalarFieldEnum)[keyof typeof LanguagesScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    release_date: 'release_date',
    genre_id: 'genre_id',
    language_id: 'language_id',
    oscar_count: 'oscar_count'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type genresWhereInput = {
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    id?: IntFilter<"genres"> | number
    name?: StringNullableFilter<"genres"> | string | null
    movies?: MoviesListRelationFilter
  }

  export type genresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    movies?: moviesOrderByRelationAggregateInput
  }

  export type genresWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: genresWhereInput | genresWhereInput[]
    OR?: genresWhereInput[]
    NOT?: genresWhereInput | genresWhereInput[]
    name?: StringNullableFilter<"genres"> | string | null
    movies?: MoviesListRelationFilter
  }, "id">

  export type genresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: genresCountOrderByAggregateInput
    _avg?: genresAvgOrderByAggregateInput
    _max?: genresMaxOrderByAggregateInput
    _min?: genresMinOrderByAggregateInput
    _sum?: genresSumOrderByAggregateInput
  }

  export type genresScalarWhereWithAggregatesInput = {
    AND?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    OR?: genresScalarWhereWithAggregatesInput[]
    NOT?: genresScalarWhereWithAggregatesInput | genresScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"genres"> | number
    name?: StringNullableWithAggregatesFilter<"genres"> | string | null
  }

  export type languagesWhereInput = {
    AND?: languagesWhereInput | languagesWhereInput[]
    OR?: languagesWhereInput[]
    NOT?: languagesWhereInput | languagesWhereInput[]
    id?: IntFilter<"languages"> | number
    name?: StringNullableFilter<"languages"> | string | null
    movies?: MoviesListRelationFilter
  }

  export type languagesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    movies?: moviesOrderByRelationAggregateInput
  }

  export type languagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: languagesWhereInput | languagesWhereInput[]
    OR?: languagesWhereInput[]
    NOT?: languagesWhereInput | languagesWhereInput[]
    name?: StringNullableFilter<"languages"> | string | null
    movies?: MoviesListRelationFilter
  }, "id">

  export type languagesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: languagesCountOrderByAggregateInput
    _avg?: languagesAvgOrderByAggregateInput
    _max?: languagesMaxOrderByAggregateInput
    _min?: languagesMinOrderByAggregateInput
    _sum?: languagesSumOrderByAggregateInput
  }

  export type languagesScalarWhereWithAggregatesInput = {
    AND?: languagesScalarWhereWithAggregatesInput | languagesScalarWhereWithAggregatesInput[]
    OR?: languagesScalarWhereWithAggregatesInput[]
    NOT?: languagesScalarWhereWithAggregatesInput | languagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"languages"> | number
    name?: StringNullableWithAggregatesFilter<"languages"> | string | null
  }

  export type moviesWhereInput = {
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    id?: IntFilter<"movies"> | number
    title?: StringNullableFilter<"movies"> | string | null
    release_date?: DateTimeNullableFilter<"movies"> | Date | string | null
    genre_id?: IntNullableFilter<"movies"> | number | null
    language_id?: IntNullableFilter<"movies"> | number | null
    oscar_count?: IntNullableFilter<"movies"> | number | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    languages?: XOR<LanguagesNullableScalarRelationFilter, languagesWhereInput> | null
  }

  export type moviesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    language_id?: SortOrderInput | SortOrder
    oscar_count?: SortOrderInput | SortOrder
    genres?: genresOrderByWithRelationInput
    languages?: languagesOrderByWithRelationInput
  }

  export type moviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: moviesWhereInput | moviesWhereInput[]
    OR?: moviesWhereInput[]
    NOT?: moviesWhereInput | moviesWhereInput[]
    title?: StringNullableFilter<"movies"> | string | null
    release_date?: DateTimeNullableFilter<"movies"> | Date | string | null
    genre_id?: IntNullableFilter<"movies"> | number | null
    language_id?: IntNullableFilter<"movies"> | number | null
    oscar_count?: IntNullableFilter<"movies"> | number | null
    genres?: XOR<GenresNullableScalarRelationFilter, genresWhereInput> | null
    languages?: XOR<LanguagesNullableScalarRelationFilter, languagesWhereInput> | null
  }, "id">

  export type moviesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    release_date?: SortOrderInput | SortOrder
    genre_id?: SortOrderInput | SortOrder
    language_id?: SortOrderInput | SortOrder
    oscar_count?: SortOrderInput | SortOrder
    _count?: moviesCountOrderByAggregateInput
    _avg?: moviesAvgOrderByAggregateInput
    _max?: moviesMaxOrderByAggregateInput
    _min?: moviesMinOrderByAggregateInput
    _sum?: moviesSumOrderByAggregateInput
  }

  export type moviesScalarWhereWithAggregatesInput = {
    AND?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    OR?: moviesScalarWhereWithAggregatesInput[]
    NOT?: moviesScalarWhereWithAggregatesInput | moviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"movies"> | number
    title?: StringNullableWithAggregatesFilter<"movies"> | string | null
    release_date?: DateTimeNullableWithAggregatesFilter<"movies"> | Date | string | null
    genre_id?: IntNullableWithAggregatesFilter<"movies"> | number | null
    language_id?: IntNullableWithAggregatesFilter<"movies"> | number | null
    oscar_count?: IntNullableWithAggregatesFilter<"movies"> | number | null
  }

  export type genresCreateInput = {
    name?: string | null
    movies?: moviesCreateNestedManyWithoutGenresInput
  }

  export type genresUncheckedCreateInput = {
    id?: number
    name?: string | null
    movies?: moviesUncheckedCreateNestedManyWithoutGenresInput
  }

  export type genresUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: moviesUpdateManyWithoutGenresNestedInput
  }

  export type genresUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: moviesUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type genresCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type genresUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languagesCreateInput = {
    name?: string | null
    movies?: moviesCreateNestedManyWithoutLanguagesInput
  }

  export type languagesUncheckedCreateInput = {
    id?: number
    name?: string | null
    movies?: moviesUncheckedCreateNestedManyWithoutLanguagesInput
  }

  export type languagesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: moviesUpdateManyWithoutLanguagesNestedInput
  }

  export type languagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: moviesUncheckedUpdateManyWithoutLanguagesNestedInput
  }

  export type languagesCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type languagesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type moviesCreateInput = {
    title?: string | null
    release_date?: Date | string | null
    oscar_count?: number | null
    genres?: genresCreateNestedOneWithoutMoviesInput
    languages?: languagesCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateInput = {
    id?: number
    title?: string | null
    release_date?: Date | string | null
    genre_id?: number | null
    language_id?: number | null
    oscar_count?: number | null
  }

  export type moviesUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
    genres?: genresUpdateOneWithoutMoviesNestedInput
    languages?: languagesUpdateOneWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: NullableIntFieldUpdateOperationsInput | number | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type moviesCreateManyInput = {
    id?: number
    title?: string | null
    release_date?: Date | string | null
    genre_id?: number | null
    language_id?: number | null
    oscar_count?: number | null
  }

  export type moviesUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type moviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    language_id?: NullableIntFieldUpdateOperationsInput | number | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MoviesListRelationFilter = {
    every?: moviesWhereInput
    some?: moviesWhereInput
    none?: moviesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type moviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type genresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type genresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type genresSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type languagesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type languagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type languagesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type languagesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type languagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GenresNullableScalarRelationFilter = {
    is?: genresWhereInput | null
    isNot?: genresWhereInput | null
  }

  export type LanguagesNullableScalarRelationFilter = {
    is?: languagesWhereInput | null
    isNot?: languagesWhereInput | null
  }

  export type moviesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    release_date?: SortOrder
    genre_id?: SortOrder
    language_id?: SortOrder
    oscar_count?: SortOrder
  }

  export type moviesAvgOrderByAggregateInput = {
    id?: SortOrder
    genre_id?: SortOrder
    language_id?: SortOrder
    oscar_count?: SortOrder
  }

  export type moviesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    release_date?: SortOrder
    genre_id?: SortOrder
    language_id?: SortOrder
    oscar_count?: SortOrder
  }

  export type moviesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    release_date?: SortOrder
    genre_id?: SortOrder
    language_id?: SortOrder
    oscar_count?: SortOrder
  }

  export type moviesSumOrderByAggregateInput = {
    id?: SortOrder
    genre_id?: SortOrder
    language_id?: SortOrder
    oscar_count?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type moviesCreateNestedManyWithoutGenresInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type moviesUpdateManyWithoutGenresNestedInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutGenresInput | moviesUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutGenresInput | moviesUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutGenresInput | moviesUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type moviesUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput> | moviesCreateWithoutGenresInput[] | moviesUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutGenresInput | moviesCreateOrConnectWithoutGenresInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutGenresInput | moviesUpsertWithWhereUniqueWithoutGenresInput[]
    createMany?: moviesCreateManyGenresInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutGenresInput | moviesUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutGenresInput | moviesUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesCreateNestedManyWithoutLanguagesInput = {
    create?: XOR<moviesCreateWithoutLanguagesInput, moviesUncheckedCreateWithoutLanguagesInput> | moviesCreateWithoutLanguagesInput[] | moviesUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutLanguagesInput | moviesCreateOrConnectWithoutLanguagesInput[]
    createMany?: moviesCreateManyLanguagesInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUncheckedCreateNestedManyWithoutLanguagesInput = {
    create?: XOR<moviesCreateWithoutLanguagesInput, moviesUncheckedCreateWithoutLanguagesInput> | moviesCreateWithoutLanguagesInput[] | moviesUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutLanguagesInput | moviesCreateOrConnectWithoutLanguagesInput[]
    createMany?: moviesCreateManyLanguagesInputEnvelope
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
  }

  export type moviesUpdateManyWithoutLanguagesNestedInput = {
    create?: XOR<moviesCreateWithoutLanguagesInput, moviesUncheckedCreateWithoutLanguagesInput> | moviesCreateWithoutLanguagesInput[] | moviesUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutLanguagesInput | moviesCreateOrConnectWithoutLanguagesInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutLanguagesInput | moviesUpsertWithWhereUniqueWithoutLanguagesInput[]
    createMany?: moviesCreateManyLanguagesInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutLanguagesInput | moviesUpdateWithWhereUniqueWithoutLanguagesInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutLanguagesInput | moviesUpdateManyWithWhereWithoutLanguagesInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type moviesUncheckedUpdateManyWithoutLanguagesNestedInput = {
    create?: XOR<moviesCreateWithoutLanguagesInput, moviesUncheckedCreateWithoutLanguagesInput> | moviesCreateWithoutLanguagesInput[] | moviesUncheckedCreateWithoutLanguagesInput[]
    connectOrCreate?: moviesCreateOrConnectWithoutLanguagesInput | moviesCreateOrConnectWithoutLanguagesInput[]
    upsert?: moviesUpsertWithWhereUniqueWithoutLanguagesInput | moviesUpsertWithWhereUniqueWithoutLanguagesInput[]
    createMany?: moviesCreateManyLanguagesInputEnvelope
    set?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    disconnect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    delete?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    connect?: moviesWhereUniqueInput | moviesWhereUniqueInput[]
    update?: moviesUpdateWithWhereUniqueWithoutLanguagesInput | moviesUpdateWithWhereUniqueWithoutLanguagesInput[]
    updateMany?: moviesUpdateManyWithWhereWithoutLanguagesInput | moviesUpdateManyWithWhereWithoutLanguagesInput[]
    deleteMany?: moviesScalarWhereInput | moviesScalarWhereInput[]
  }

  export type genresCreateNestedOneWithoutMoviesInput = {
    create?: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: genresCreateOrConnectWithoutMoviesInput
    connect?: genresWhereUniqueInput
  }

  export type languagesCreateNestedOneWithoutMoviesInput = {
    create?: XOR<languagesCreateWithoutMoviesInput, languagesUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: languagesCreateOrConnectWithoutMoviesInput
    connect?: languagesWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type genresUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: genresCreateOrConnectWithoutMoviesInput
    upsert?: genresUpsertWithoutMoviesInput
    disconnect?: genresWhereInput | boolean
    delete?: genresWhereInput | boolean
    connect?: genresWhereUniqueInput
    update?: XOR<XOR<genresUpdateToOneWithWhereWithoutMoviesInput, genresUpdateWithoutMoviesInput>, genresUncheckedUpdateWithoutMoviesInput>
  }

  export type languagesUpdateOneWithoutMoviesNestedInput = {
    create?: XOR<languagesCreateWithoutMoviesInput, languagesUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: languagesCreateOrConnectWithoutMoviesInput
    upsert?: languagesUpsertWithoutMoviesInput
    disconnect?: languagesWhereInput | boolean
    delete?: languagesWhereInput | boolean
    connect?: languagesWhereUniqueInput
    update?: XOR<XOR<languagesUpdateToOneWithWhereWithoutMoviesInput, languagesUpdateWithoutMoviesInput>, languagesUncheckedUpdateWithoutMoviesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type moviesCreateWithoutGenresInput = {
    title?: string | null
    release_date?: Date | string | null
    oscar_count?: number | null
    languages?: languagesCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateWithoutGenresInput = {
    id?: number
    title?: string | null
    release_date?: Date | string | null
    language_id?: number | null
    oscar_count?: number | null
  }

  export type moviesCreateOrConnectWithoutGenresInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput>
  }

  export type moviesCreateManyGenresInputEnvelope = {
    data: moviesCreateManyGenresInput | moviesCreateManyGenresInput[]
    skipDuplicates?: boolean
  }

  export type moviesUpsertWithWhereUniqueWithoutGenresInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutGenresInput, moviesUncheckedUpdateWithoutGenresInput>
    create: XOR<moviesCreateWithoutGenresInput, moviesUncheckedCreateWithoutGenresInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutGenresInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutGenresInput, moviesUncheckedUpdateWithoutGenresInput>
  }

  export type moviesUpdateManyWithWhereWithoutGenresInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutGenresInput>
  }

  export type moviesScalarWhereInput = {
    AND?: moviesScalarWhereInput | moviesScalarWhereInput[]
    OR?: moviesScalarWhereInput[]
    NOT?: moviesScalarWhereInput | moviesScalarWhereInput[]
    id?: IntFilter<"movies"> | number
    title?: StringNullableFilter<"movies"> | string | null
    release_date?: DateTimeNullableFilter<"movies"> | Date | string | null
    genre_id?: IntNullableFilter<"movies"> | number | null
    language_id?: IntNullableFilter<"movies"> | number | null
    oscar_count?: IntNullableFilter<"movies"> | number | null
  }

  export type moviesCreateWithoutLanguagesInput = {
    title?: string | null
    release_date?: Date | string | null
    oscar_count?: number | null
    genres?: genresCreateNestedOneWithoutMoviesInput
  }

  export type moviesUncheckedCreateWithoutLanguagesInput = {
    id?: number
    title?: string | null
    release_date?: Date | string | null
    genre_id?: number | null
    oscar_count?: number | null
  }

  export type moviesCreateOrConnectWithoutLanguagesInput = {
    where: moviesWhereUniqueInput
    create: XOR<moviesCreateWithoutLanguagesInput, moviesUncheckedCreateWithoutLanguagesInput>
  }

  export type moviesCreateManyLanguagesInputEnvelope = {
    data: moviesCreateManyLanguagesInput | moviesCreateManyLanguagesInput[]
    skipDuplicates?: boolean
  }

  export type moviesUpsertWithWhereUniqueWithoutLanguagesInput = {
    where: moviesWhereUniqueInput
    update: XOR<moviesUpdateWithoutLanguagesInput, moviesUncheckedUpdateWithoutLanguagesInput>
    create: XOR<moviesCreateWithoutLanguagesInput, moviesUncheckedCreateWithoutLanguagesInput>
  }

  export type moviesUpdateWithWhereUniqueWithoutLanguagesInput = {
    where: moviesWhereUniqueInput
    data: XOR<moviesUpdateWithoutLanguagesInput, moviesUncheckedUpdateWithoutLanguagesInput>
  }

  export type moviesUpdateManyWithWhereWithoutLanguagesInput = {
    where: moviesScalarWhereInput
    data: XOR<moviesUpdateManyMutationInput, moviesUncheckedUpdateManyWithoutLanguagesInput>
  }

  export type genresCreateWithoutMoviesInput = {
    name?: string | null
  }

  export type genresUncheckedCreateWithoutMoviesInput = {
    id?: number
    name?: string | null
  }

  export type genresCreateOrConnectWithoutMoviesInput = {
    where: genresWhereUniqueInput
    create: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
  }

  export type languagesCreateWithoutMoviesInput = {
    name?: string | null
  }

  export type languagesUncheckedCreateWithoutMoviesInput = {
    id?: number
    name?: string | null
  }

  export type languagesCreateOrConnectWithoutMoviesInput = {
    where: languagesWhereUniqueInput
    create: XOR<languagesCreateWithoutMoviesInput, languagesUncheckedCreateWithoutMoviesInput>
  }

  export type genresUpsertWithoutMoviesInput = {
    update: XOR<genresUpdateWithoutMoviesInput, genresUncheckedUpdateWithoutMoviesInput>
    create: XOR<genresCreateWithoutMoviesInput, genresUncheckedCreateWithoutMoviesInput>
    where?: genresWhereInput
  }

  export type genresUpdateToOneWithWhereWithoutMoviesInput = {
    where?: genresWhereInput
    data: XOR<genresUpdateWithoutMoviesInput, genresUncheckedUpdateWithoutMoviesInput>
  }

  export type genresUpdateWithoutMoviesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type genresUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languagesUpsertWithoutMoviesInput = {
    update: XOR<languagesUpdateWithoutMoviesInput, languagesUncheckedUpdateWithoutMoviesInput>
    create: XOR<languagesCreateWithoutMoviesInput, languagesUncheckedCreateWithoutMoviesInput>
    where?: languagesWhereInput
  }

  export type languagesUpdateToOneWithWhereWithoutMoviesInput = {
    where?: languagesWhereInput
    data: XOR<languagesUpdateWithoutMoviesInput, languagesUncheckedUpdateWithoutMoviesInput>
  }

  export type languagesUpdateWithoutMoviesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type languagesUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type moviesCreateManyGenresInput = {
    id?: number
    title?: string | null
    release_date?: Date | string | null
    language_id?: number | null
    oscar_count?: number | null
  }

  export type moviesUpdateWithoutGenresInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
    languages?: languagesUpdateOneWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language_id?: NullableIntFieldUpdateOperationsInput | number | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type moviesUncheckedUpdateManyWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    language_id?: NullableIntFieldUpdateOperationsInput | number | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type moviesCreateManyLanguagesInput = {
    id?: number
    title?: string | null
    release_date?: Date | string | null
    genre_id?: number | null
    oscar_count?: number | null
  }

  export type moviesUpdateWithoutLanguagesInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
    genres?: genresUpdateOneWithoutMoviesNestedInput
  }

  export type moviesUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type moviesUncheckedUpdateManyWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    release_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    genre_id?: NullableIntFieldUpdateOperationsInput | number | null
    oscar_count?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}