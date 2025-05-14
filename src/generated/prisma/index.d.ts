
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
 * Model patient
 * 
 */
export type patient = $Result.DefaultSelection<Prisma.$patientPayload>
/**
 * Model prescription
 * 
 */
export type prescription = $Result.DefaultSelection<Prisma.$prescriptionPayload>
/**
 * Model appointment
 * 
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Patients
 * const patients = await prisma.patient.findMany()
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
   * // Fetch zero or more Patients
   * const patients = await prisma.patient.findMany()
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
   * `prisma.patient`: Exposes CRUD operations for the **patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.patientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.prescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.appointmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    patient: 'patient',
    prescription: 'prescription',
    appointment: 'appointment'
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
      modelProps: "patient" | "prescription" | "appointment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      patient: {
        payload: Prisma.$patientPayload<ExtArgs>
        fields: Prisma.patientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findFirst: {
            args: Prisma.patientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          findMany: {
            args: Prisma.patientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          create: {
            args: Prisma.patientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          createMany: {
            args: Prisma.patientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          delete: {
            args: Prisma.patientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          update: {
            args: Prisma.patientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          deleteMany: {
            args: Prisma.patientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>[]
          }
          upsert: {
            args: Prisma.patientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.patientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.patientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      prescription: {
        payload: Prisma.$prescriptionPayload<ExtArgs>
        fields: Prisma.prescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.prescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.prescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>
          }
          findFirst: {
            args: Prisma.prescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.prescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>
          }
          findMany: {
            args: Prisma.prescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>[]
          }
          create: {
            args: Prisma.prescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>
          }
          createMany: {
            args: Prisma.prescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.prescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>[]
          }
          delete: {
            args: Prisma.prescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>
          }
          update: {
            args: Prisma.prescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>
          }
          deleteMany: {
            args: Prisma.prescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.prescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.prescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>[]
          }
          upsert: {
            args: Prisma.prescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$prescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.prescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.prescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>
        fields: Prisma.appointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.appointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.appointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[]
          }
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
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
    patient?: patientOmit
    prescription?: prescriptionOmit
    appointment?: appointmentOmit
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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    prescriptions: number
    appointments: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | PatientCountOutputTypeCountPrescriptionsArgs
    appointments?: boolean | PatientCountOutputTypeCountAppointmentsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prescriptionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    phone: string | null
    sex: string | null
    occu: string | null
    medicalHistory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: number | null
    phone: string | null
    sex: string | null
    occu: string | null
    medicalHistory: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    age: number
    phone: number
    sex: number
    occu: number
    medicalHistory: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    phone?: true
    sex?: true
    occu?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    phone?: true
    sex?: true
    occu?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    phone?: true
    sex?: true
    occu?: true
    medicalHistory?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patient to aggregate.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type patientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patientWhereInput
    orderBy?: patientOrderByWithAggregationInput | patientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: patientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends patientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type patientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    phone?: boolean
    sex?: boolean
    occu?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prescriptions?: boolean | patient$prescriptionsArgs<ExtArgs>
    appointments?: boolean | patient$appointmentsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type patientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    phone?: boolean
    sex?: boolean
    occu?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type patientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    phone?: boolean
    sex?: boolean
    occu?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["patient"]>

  export type patientSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    phone?: boolean
    sex?: boolean
    occu?: boolean
    medicalHistory?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type patientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "phone" | "sex" | "occu" | "medicalHistory" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type patientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | patient$prescriptionsArgs<ExtArgs>
    appointments?: boolean | patient$appointmentsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type patientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $patientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patient"
    objects: {
      prescriptions: Prisma.$prescriptionPayload<ExtArgs>[]
      appointments: Prisma.$appointmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: number
      phone: string
      sex: string
      occu: string
      medicalHistory: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type patientGetPayload<S extends boolean | null | undefined | patientDefaultArgs> = $Result.GetResult<Prisma.$patientPayload, S>

  type patientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface patientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patient'], meta: { name: 'patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {patientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patientFindUniqueArgs>(args: SelectSubset<T, patientFindUniqueArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patientFindUniqueOrThrowArgs>(args: SelectSubset<T, patientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patientFindFirstArgs>(args?: SelectSubset<T, patientFindFirstArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patientFindFirstOrThrowArgs>(args?: SelectSubset<T, patientFindFirstOrThrowArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends patientFindManyArgs>(args?: SelectSubset<T, patientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {patientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends patientCreateArgs>(args: SelectSubset<T, patientCreateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {patientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patientCreateManyArgs>(args?: SelectSubset<T, patientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {patientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patientCreateManyAndReturnArgs>(args?: SelectSubset<T, patientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {patientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends patientDeleteArgs>(args: SelectSubset<T, patientDeleteArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {patientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patientUpdateArgs>(args: SelectSubset<T, patientUpdateArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {patientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patientDeleteManyArgs>(args?: SelectSubset<T, patientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patientUpdateManyArgs>(args: SelectSubset<T, patientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {patientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
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
    updateManyAndReturn<T extends patientUpdateManyAndReturnArgs>(args: SelectSubset<T, patientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {patientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends patientUpsertArgs>(args: SelectSubset<T, patientUpsertArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends patientCountArgs>(
      args?: Subset<T, patientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patientGroupByArgs} args - Group by arguments.
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
      T extends patientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patientGroupByArgs['orderBy'] }
        : { orderBy?: patientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, patientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patient model
   */
  readonly fields: patientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescriptions<T extends patient$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, patient$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    appointments<T extends patient$appointmentsArgs<ExtArgs> = {}>(args?: Subset<T, patient$appointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the patient model
   */
  interface patientFieldRefs {
    readonly id: FieldRef<"patient", 'Int'>
    readonly name: FieldRef<"patient", 'String'>
    readonly age: FieldRef<"patient", 'Int'>
    readonly phone: FieldRef<"patient", 'String'>
    readonly sex: FieldRef<"patient", 'String'>
    readonly occu: FieldRef<"patient", 'String'>
    readonly medicalHistory: FieldRef<"patient", 'String'>
    readonly createdAt: FieldRef<"patient", 'DateTime'>
    readonly updatedAt: FieldRef<"patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * patient findUnique
   */
  export type patientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findUniqueOrThrow
   */
  export type patientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient findFirst
   */
  export type patientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findFirstOrThrow
   */
  export type patientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patient to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient findMany
   */
  export type patientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter, which patients to fetch.
     */
    where?: patientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patients to fetch.
     */
    orderBy?: patientOrderByWithRelationInput | patientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patients.
     */
    cursor?: patientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * patient create
   */
  export type patientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to create a patient.
     */
    data: XOR<patientCreateInput, patientUncheckedCreateInput>
  }

  /**
   * patient createMany
   */
  export type patientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient createManyAndReturn
   */
  export type patientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * The data used to create many patients.
     */
    data: patientCreateManyInput | patientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patient update
   */
  export type patientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The data needed to update a patient.
     */
    data: XOR<patientUpdateInput, patientUncheckedUpdateInput>
    /**
     * Choose, which patient to update.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient updateMany
   */
  export type patientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient updateManyAndReturn
   */
  export type patientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * The data used to update patients.
     */
    data: XOR<patientUpdateManyMutationInput, patientUncheckedUpdateManyInput>
    /**
     * Filter which patients to update
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to update.
     */
    limit?: number
  }

  /**
   * patient upsert
   */
  export type patientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * The filter to search for the patient to update in case it exists.
     */
    where: patientWhereUniqueInput
    /**
     * In case the patient found by the `where` argument doesn't exist, create a new patient with this data.
     */
    create: XOR<patientCreateInput, patientUncheckedCreateInput>
    /**
     * In case the patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patientUpdateInput, patientUncheckedUpdateInput>
  }

  /**
   * patient delete
   */
  export type patientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
    /**
     * Filter which patient to delete.
     */
    where: patientWhereUniqueInput
  }

  /**
   * patient deleteMany
   */
  export type patientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patients to delete
     */
    where?: patientWhereInput
    /**
     * Limit how many patients to delete.
     */
    limit?: number
  }

  /**
   * patient.prescriptions
   */
  export type patient$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    where?: prescriptionWhereInput
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[]
    cursor?: prescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * patient.appointments
   */
  export type patient$appointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    cursor?: appointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * patient without action
   */
  export type patientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patient
     */
    select?: patientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patient
     */
    omit?: patientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patientInclude<ExtArgs> | null
  }


  /**
   * Model prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type PrescriptionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    medicationName: string | null
    dosage: string | null
    instructions: string | null
    datePrescribed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    medicationName: string | null
    dosage: string | null
    instructions: string | null
    datePrescribed: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    patientId: number
    medicationName: number
    dosage: number
    instructions: number
    datePrescribed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrescriptionAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type PrescriptionSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type PrescriptionMinAggregateInputType = {
    id?: true
    patientId?: true
    medicationName?: true
    dosage?: true
    instructions?: true
    datePrescribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    patientId?: true
    medicationName?: true
    dosage?: true
    instructions?: true
    datePrescribed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    patientId?: true
    medicationName?: true
    dosage?: true
    instructions?: true
    datePrescribed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prescription to aggregate.
     */
    where?: prescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: prescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type prescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: prescriptionWhereInput
    orderBy?: prescriptionOrderByWithAggregationInput | prescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: prescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _avg?: PrescriptionAvgAggregateInputType
    _sum?: PrescriptionSumAggregateInputType
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: number
    patientId: number
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date
    createdAt: Date
    updatedAt: Date
    _count: PrescriptionCountAggregateOutputType | null
    _avg: PrescriptionAvgAggregateOutputType | null
    _sum: PrescriptionSumAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends prescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type prescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicationName?: boolean
    dosage?: boolean
    instructions?: boolean
    datePrescribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type prescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicationName?: boolean
    dosage?: boolean
    instructions?: boolean
    datePrescribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type prescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    medicationName?: boolean
    dosage?: boolean
    instructions?: boolean
    datePrescribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type prescriptionSelectScalar = {
    id?: boolean
    patientId?: boolean
    medicationName?: boolean
    dosage?: boolean
    instructions?: boolean
    datePrescribed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type prescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "medicationName" | "dosage" | "instructions" | "datePrescribed" | "createdAt" | "updatedAt", ExtArgs["result"]["prescription"]>
  export type prescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }
  export type prescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }
  export type prescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }

  export type $prescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "prescription"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      medicationName: string
      dosage: string
      instructions: string
      datePrescribed: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type prescriptionGetPayload<S extends boolean | null | undefined | prescriptionDefaultArgs> = $Result.GetResult<Prisma.$prescriptionPayload, S>

  type prescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<prescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface prescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['prescription'], meta: { name: 'prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {prescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends prescriptionFindUniqueArgs>(args: SelectSubset<T, prescriptionFindUniqueArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {prescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends prescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, prescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends prescriptionFindFirstArgs>(args?: SelectSubset<T, prescriptionFindFirstArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends prescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, prescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends prescriptionFindManyArgs>(args?: SelectSubset<T, prescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {prescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends prescriptionCreateArgs>(args: SelectSubset<T, prescriptionCreateArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {prescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends prescriptionCreateManyArgs>(args?: SelectSubset<T, prescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {prescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends prescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, prescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {prescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends prescriptionDeleteArgs>(args: SelectSubset<T, prescriptionDeleteArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {prescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends prescriptionUpdateArgs>(args: SelectSubset<T, prescriptionUpdateArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {prescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends prescriptionDeleteManyArgs>(args?: SelectSubset<T, prescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends prescriptionUpdateManyArgs>(args: SelectSubset<T, prescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {prescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
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
    updateManyAndReturn<T extends prescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, prescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {prescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends prescriptionUpsertArgs>(args: SelectSubset<T, prescriptionUpsertArgs<ExtArgs>>): Prisma__prescriptionClient<$Result.GetResult<Prisma.$prescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends prescriptionCountArgs>(
      args?: Subset<T, prescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {prescriptionGroupByArgs} args - Group by arguments.
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
      T extends prescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: prescriptionGroupByArgs['orderBy'] }
        : { orderBy?: prescriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, prescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the prescription model
   */
  readonly fields: prescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__prescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the prescription model
   */
  interface prescriptionFieldRefs {
    readonly id: FieldRef<"prescription", 'Int'>
    readonly patientId: FieldRef<"prescription", 'Int'>
    readonly medicationName: FieldRef<"prescription", 'String'>
    readonly dosage: FieldRef<"prescription", 'String'>
    readonly instructions: FieldRef<"prescription", 'String'>
    readonly datePrescribed: FieldRef<"prescription", 'DateTime'>
    readonly createdAt: FieldRef<"prescription", 'DateTime'>
    readonly updatedAt: FieldRef<"prescription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * prescription findUnique
   */
  export type prescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * Filter, which prescription to fetch.
     */
    where: prescriptionWhereUniqueInput
  }

  /**
   * prescription findUniqueOrThrow
   */
  export type prescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * Filter, which prescription to fetch.
     */
    where: prescriptionWhereUniqueInput
  }

  /**
   * prescription findFirst
   */
  export type prescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * Filter, which prescription to fetch.
     */
    where?: prescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prescriptions.
     */
    cursor?: prescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * prescription findFirstOrThrow
   */
  export type prescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * Filter, which prescription to fetch.
     */
    where?: prescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for prescriptions.
     */
    cursor?: prescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * prescription findMany
   */
  export type prescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * Filter, which prescriptions to fetch.
     */
    where?: prescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of prescriptions to fetch.
     */
    orderBy?: prescriptionOrderByWithRelationInput | prescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing prescriptions.
     */
    cursor?: prescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * prescription create
   */
  export type prescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a prescription.
     */
    data: XOR<prescriptionCreateInput, prescriptionUncheckedCreateInput>
  }

  /**
   * prescription createMany
   */
  export type prescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many prescriptions.
     */
    data: prescriptionCreateManyInput | prescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * prescription createManyAndReturn
   */
  export type prescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many prescriptions.
     */
    data: prescriptionCreateManyInput | prescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * prescription update
   */
  export type prescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a prescription.
     */
    data: XOR<prescriptionUpdateInput, prescriptionUncheckedUpdateInput>
    /**
     * Choose, which prescription to update.
     */
    where: prescriptionWhereUniqueInput
  }

  /**
   * prescription updateMany
   */
  export type prescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update prescriptions.
     */
    data: XOR<prescriptionUpdateManyMutationInput, prescriptionUncheckedUpdateManyInput>
    /**
     * Filter which prescriptions to update
     */
    where?: prescriptionWhereInput
    /**
     * Limit how many prescriptions to update.
     */
    limit?: number
  }

  /**
   * prescription updateManyAndReturn
   */
  export type prescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * The data used to update prescriptions.
     */
    data: XOR<prescriptionUpdateManyMutationInput, prescriptionUncheckedUpdateManyInput>
    /**
     * Filter which prescriptions to update
     */
    where?: prescriptionWhereInput
    /**
     * Limit how many prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * prescription upsert
   */
  export type prescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the prescription to update in case it exists.
     */
    where: prescriptionWhereUniqueInput
    /**
     * In case the prescription found by the `where` argument doesn't exist, create a new prescription with this data.
     */
    create: XOR<prescriptionCreateInput, prescriptionUncheckedCreateInput>
    /**
     * In case the prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<prescriptionUpdateInput, prescriptionUncheckedUpdateInput>
  }

  /**
   * prescription delete
   */
  export type prescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
    /**
     * Filter which prescription to delete.
     */
    where: prescriptionWhereUniqueInput
  }

  /**
   * prescription deleteMany
   */
  export type prescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which prescriptions to delete
     */
    where?: prescriptionWhereInput
    /**
     * Limit how many prescriptions to delete.
     */
    limit?: number
  }

  /**
   * prescription without action
   */
  export type prescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the prescription
     */
    select?: prescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the prescription
     */
    omit?: prescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: prescriptionInclude<ExtArgs> | null
  }


  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    patientId: number | null
    date: Date | null
    time: string | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    patientId: number | null
    date: Date | null
    time: string | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    patientId: number
    date: number
    time: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    patientId?: true
    date?: true
    time?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    patientId?: true
    date?: true
    time?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    patientId?: true
    date?: true
    time?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: appointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    patientId: number
    date: Date
    time: string
    reason: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    date?: boolean
    time?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type appointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    date?: boolean
    time?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type appointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    date?: boolean
    time?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type appointmentSelectScalar = {
    id?: boolean
    patientId?: boolean
    date?: boolean
    time?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type appointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "date" | "time" | "reason" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }
  export type appointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }
  export type appointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | patientDefaultArgs<ExtArgs>
  }

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "appointment"
    objects: {
      patient: Prisma.$patientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientId: number
      date: Date
      time: string
      reason: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<Prisma.$appointmentPayload, S>

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<appointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment'], meta: { name: 'appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends appointmentFindUniqueArgs>(args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends appointmentFindFirstArgs>(args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends appointmentFindManyArgs>(args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends appointmentCreateArgs>(args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends appointmentCreateManyArgs>(args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {appointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends appointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, appointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends appointmentDeleteArgs>(args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends appointmentUpdateArgs>(args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends appointmentDeleteManyArgs>(args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends appointmentUpdateManyArgs>(args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {appointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends appointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, appointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends appointmentUpsertArgs>(args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
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
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the appointment model
   */
  readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends patientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, patientDefaultArgs<ExtArgs>>): Prisma__patientClient<$Result.GetResult<Prisma.$patientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<"appointment", 'Int'>
    readonly patientId: FieldRef<"appointment", 'Int'>
    readonly date: FieldRef<"appointment", 'DateTime'>
    readonly time: FieldRef<"appointment", 'String'>
    readonly reason: FieldRef<"appointment", 'String'>
    readonly status: FieldRef<"appointment", 'String'>
    readonly createdAt: FieldRef<"appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>
  }

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * appointment createManyAndReturn
   */
  export type appointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
  }

  /**
   * appointment updateManyAndReturn
   */
  export type appointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>
  }

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput
  }

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput
    /**
     * Limit how many appointments to delete.
     */
    limit?: number
  }

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the appointment
     */
    omit?: appointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: appointmentInclude<ExtArgs> | null
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


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    phone: 'phone',
    sex: 'sex',
    occu: 'occu',
    medicalHistory: 'medicalHistory',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    medicationName: 'medicationName',
    dosage: 'dosage',
    instructions: 'instructions',
    datePrescribed: 'datePrescribed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    date: 'date',
    time: 'time',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


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


  export type patientWhereInput = {
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    id?: IntFilter<"patient"> | number
    name?: StringFilter<"patient"> | string
    age?: IntFilter<"patient"> | number
    phone?: StringFilter<"patient"> | string
    sex?: StringFilter<"patient"> | string
    occu?: StringFilter<"patient"> | string
    medicalHistory?: StringNullableFilter<"patient"> | string | null
    createdAt?: DateTimeFilter<"patient"> | Date | string
    updatedAt?: DateTimeFilter<"patient"> | Date | string
    prescriptions?: PrescriptionListRelationFilter
    appointments?: AppointmentListRelationFilter
  }

  export type patientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    occu?: SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prescriptions?: prescriptionOrderByRelationAggregateInput
    appointments?: appointmentOrderByRelationAggregateInput
  }

  export type patientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: patientWhereInput | patientWhereInput[]
    OR?: patientWhereInput[]
    NOT?: patientWhereInput | patientWhereInput[]
    name?: StringFilter<"patient"> | string
    age?: IntFilter<"patient"> | number
    phone?: StringFilter<"patient"> | string
    sex?: StringFilter<"patient"> | string
    occu?: StringFilter<"patient"> | string
    medicalHistory?: StringNullableFilter<"patient"> | string | null
    createdAt?: DateTimeFilter<"patient"> | Date | string
    updatedAt?: DateTimeFilter<"patient"> | Date | string
    prescriptions?: PrescriptionListRelationFilter
    appointments?: AppointmentListRelationFilter
  }, "id">

  export type patientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    occu?: SortOrder
    medicalHistory?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: patientCountOrderByAggregateInput
    _avg?: patientAvgOrderByAggregateInput
    _max?: patientMaxOrderByAggregateInput
    _min?: patientMinOrderByAggregateInput
    _sum?: patientSumOrderByAggregateInput
  }

  export type patientScalarWhereWithAggregatesInput = {
    AND?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    OR?: patientScalarWhereWithAggregatesInput[]
    NOT?: patientScalarWhereWithAggregatesInput | patientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"patient"> | number
    name?: StringWithAggregatesFilter<"patient"> | string
    age?: IntWithAggregatesFilter<"patient"> | number
    phone?: StringWithAggregatesFilter<"patient"> | string
    sex?: StringWithAggregatesFilter<"patient"> | string
    occu?: StringWithAggregatesFilter<"patient"> | string
    medicalHistory?: StringNullableWithAggregatesFilter<"patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"patient"> | Date | string
  }

  export type prescriptionWhereInput = {
    AND?: prescriptionWhereInput | prescriptionWhereInput[]
    OR?: prescriptionWhereInput[]
    NOT?: prescriptionWhereInput | prescriptionWhereInput[]
    id?: IntFilter<"prescription"> | number
    patientId?: IntFilter<"prescription"> | number
    medicationName?: StringFilter<"prescription"> | string
    dosage?: StringFilter<"prescription"> | string
    instructions?: StringFilter<"prescription"> | string
    datePrescribed?: DateTimeFilter<"prescription"> | Date | string
    createdAt?: DateTimeFilter<"prescription"> | Date | string
    updatedAt?: DateTimeFilter<"prescription"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }

  export type prescriptionOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    datePrescribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: patientOrderByWithRelationInput
  }

  export type prescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: prescriptionWhereInput | prescriptionWhereInput[]
    OR?: prescriptionWhereInput[]
    NOT?: prescriptionWhereInput | prescriptionWhereInput[]
    patientId?: IntFilter<"prescription"> | number
    medicationName?: StringFilter<"prescription"> | string
    dosage?: StringFilter<"prescription"> | string
    instructions?: StringFilter<"prescription"> | string
    datePrescribed?: DateTimeFilter<"prescription"> | Date | string
    createdAt?: DateTimeFilter<"prescription"> | Date | string
    updatedAt?: DateTimeFilter<"prescription"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }, "id">

  export type prescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    datePrescribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: prescriptionCountOrderByAggregateInput
    _avg?: prescriptionAvgOrderByAggregateInput
    _max?: prescriptionMaxOrderByAggregateInput
    _min?: prescriptionMinOrderByAggregateInput
    _sum?: prescriptionSumOrderByAggregateInput
  }

  export type prescriptionScalarWhereWithAggregatesInput = {
    AND?: prescriptionScalarWhereWithAggregatesInput | prescriptionScalarWhereWithAggregatesInput[]
    OR?: prescriptionScalarWhereWithAggregatesInput[]
    NOT?: prescriptionScalarWhereWithAggregatesInput | prescriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"prescription"> | number
    patientId?: IntWithAggregatesFilter<"prescription"> | number
    medicationName?: StringWithAggregatesFilter<"prescription"> | string
    dosage?: StringWithAggregatesFilter<"prescription"> | string
    instructions?: StringWithAggregatesFilter<"prescription"> | string
    datePrescribed?: DateTimeWithAggregatesFilter<"prescription"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"prescription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"prescription"> | Date | string
  }

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[]
    OR?: appointmentWhereInput[]
    NOT?: appointmentWhereInput | appointmentWhereInput[]
    id?: IntFilter<"appointment"> | number
    patientId?: IntFilter<"appointment"> | number
    date?: DateTimeFilter<"appointment"> | Date | string
    time?: StringFilter<"appointment"> | string
    reason?: StringFilter<"appointment"> | string
    status?: StringFilter<"appointment"> | string
    createdAt?: DateTimeFilter<"appointment"> | Date | string
    updatedAt?: DateTimeFilter<"appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: patientOrderByWithRelationInput
  }

  export type appointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: appointmentWhereInput | appointmentWhereInput[]
    OR?: appointmentWhereInput[]
    NOT?: appointmentWhereInput | appointmentWhereInput[]
    patientId?: IntFilter<"appointment"> | number
    date?: DateTimeFilter<"appointment"> | Date | string
    time?: StringFilter<"appointment"> | string
    reason?: StringFilter<"appointment"> | string
    status?: StringFilter<"appointment"> | string
    createdAt?: DateTimeFilter<"appointment"> | Date | string
    updatedAt?: DateTimeFilter<"appointment"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, patientWhereInput>
  }, "id">

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: appointmentCountOrderByAggregateInput
    _avg?: appointmentAvgOrderByAggregateInput
    _max?: appointmentMaxOrderByAggregateInput
    _min?: appointmentMinOrderByAggregateInput
    _sum?: appointmentSumOrderByAggregateInput
  }

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[]
    OR?: appointmentScalarWhereWithAggregatesInput[]
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"appointment"> | number
    patientId?: IntWithAggregatesFilter<"appointment"> | number
    date?: DateTimeWithAggregatesFilter<"appointment"> | Date | string
    time?: StringWithAggregatesFilter<"appointment"> | string
    reason?: StringWithAggregatesFilter<"appointment"> | string
    status?: StringWithAggregatesFilter<"appointment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"appointment"> | Date | string
  }

  export type patientCreateInput = {
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: prescriptionCreateNestedManyWithoutPatientInput
    appointments?: appointmentCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateInput = {
    id?: number
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: prescriptionUncheckedCreateNestedManyWithoutPatientInput
    appointments?: appointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: prescriptionUpdateManyWithoutPatientNestedInput
    appointments?: appointmentUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: prescriptionUncheckedUpdateManyWithoutPatientNestedInput
    appointments?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateManyInput = {
    id?: number
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type patientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type patientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionCreateInput = {
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: patientCreateNestedOneWithoutPrescriptionsInput
  }

  export type prescriptionUncheckedCreateInput = {
    id?: number
    patientId: number
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type prescriptionUpdateInput = {
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientUpdateOneRequiredWithoutPrescriptionsNestedInput
  }

  export type prescriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionCreateManyInput = {
    id?: number
    patientId: number
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type prescriptionUpdateManyMutationInput = {
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentCreateInput = {
    date: Date | string
    time: string
    reason: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: patientCreateNestedOneWithoutAppointmentsInput
  }

  export type appointmentUncheckedCreateInput = {
    id?: number
    patientId: number
    date: Date | string
    time: string
    reason: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type appointmentUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: patientUpdateOneRequiredWithoutAppointmentsNestedInput
  }

  export type appointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentCreateManyInput = {
    id?: number
    patientId: number
    date: Date | string
    time: string
    reason: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type appointmentUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PrescriptionListRelationFilter = {
    every?: prescriptionWhereInput
    some?: prescriptionWhereInput
    none?: prescriptionWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput
    some?: appointmentWhereInput
    none?: appointmentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type prescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    occu?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type patientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    occu?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    phone?: SortOrder
    sex?: SortOrder
    occu?: SortOrder
    medicalHistory?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type patientSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PatientScalarRelationFilter = {
    is?: patientWhereInput
    isNot?: patientWhereInput
  }

  export type prescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    datePrescribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type prescriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type prescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    datePrescribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type prescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    medicationName?: SortOrder
    dosage?: SortOrder
    instructions?: SortOrder
    datePrescribed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type prescriptionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type appointmentAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type appointmentSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type prescriptionCreateNestedManyWithoutPatientInput = {
    create?: XOR<prescriptionCreateWithoutPatientInput, prescriptionUncheckedCreateWithoutPatientInput> | prescriptionCreateWithoutPatientInput[] | prescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: prescriptionCreateOrConnectWithoutPatientInput | prescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: prescriptionCreateManyPatientInputEnvelope
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
  }

  export type appointmentCreateNestedManyWithoutPatientInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type prescriptionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<prescriptionCreateWithoutPatientInput, prescriptionUncheckedCreateWithoutPatientInput> | prescriptionCreateWithoutPatientInput[] | prescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: prescriptionCreateOrConnectWithoutPatientInput | prescriptionCreateOrConnectWithoutPatientInput[]
    createMany?: prescriptionCreateManyPatientInputEnvelope
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
  }

  export type appointmentUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type prescriptionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<prescriptionCreateWithoutPatientInput, prescriptionUncheckedCreateWithoutPatientInput> | prescriptionCreateWithoutPatientInput[] | prescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: prescriptionCreateOrConnectWithoutPatientInput | prescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: prescriptionUpsertWithWhereUniqueWithoutPatientInput | prescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: prescriptionCreateManyPatientInputEnvelope
    set?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    disconnect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    delete?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    update?: prescriptionUpdateWithWhereUniqueWithoutPatientInput | prescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: prescriptionUpdateManyWithWhereWithoutPatientInput | prescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[]
  }

  export type appointmentUpdateManyWithoutPatientNestedInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutPatientInput | appointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutPatientInput | appointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutPatientInput | appointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type prescriptionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<prescriptionCreateWithoutPatientInput, prescriptionUncheckedCreateWithoutPatientInput> | prescriptionCreateWithoutPatientInput[] | prescriptionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: prescriptionCreateOrConnectWithoutPatientInput | prescriptionCreateOrConnectWithoutPatientInput[]
    upsert?: prescriptionUpsertWithWhereUniqueWithoutPatientInput | prescriptionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: prescriptionCreateManyPatientInputEnvelope
    set?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    disconnect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    delete?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    connect?: prescriptionWhereUniqueInput | prescriptionWhereUniqueInput[]
    update?: prescriptionUpdateWithWhereUniqueWithoutPatientInput | prescriptionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: prescriptionUpdateManyWithWhereWithoutPatientInput | prescriptionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[]
  }

  export type appointmentUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput> | appointmentCreateWithoutPatientInput[] | appointmentUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: appointmentCreateOrConnectWithoutPatientInput | appointmentCreateOrConnectWithoutPatientInput[]
    upsert?: appointmentUpsertWithWhereUniqueWithoutPatientInput | appointmentUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: appointmentCreateManyPatientInputEnvelope
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[]
    update?: appointmentUpdateWithWhereUniqueWithoutPatientInput | appointmentUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: appointmentUpdateManyWithWhereWithoutPatientInput | appointmentUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
  }

  export type patientCreateNestedOneWithoutPrescriptionsInput = {
    create?: XOR<patientCreateWithoutPrescriptionsInput, patientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: patientCreateOrConnectWithoutPrescriptionsInput
    connect?: patientWhereUniqueInput
  }

  export type patientUpdateOneRequiredWithoutPrescriptionsNestedInput = {
    create?: XOR<patientCreateWithoutPrescriptionsInput, patientUncheckedCreateWithoutPrescriptionsInput>
    connectOrCreate?: patientCreateOrConnectWithoutPrescriptionsInput
    upsert?: patientUpsertWithoutPrescriptionsInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutPrescriptionsInput, patientUpdateWithoutPrescriptionsInput>, patientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type patientCreateNestedOneWithoutAppointmentsInput = {
    create?: XOR<patientCreateWithoutAppointmentsInput, patientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentsInput
    connect?: patientWhereUniqueInput
  }

  export type patientUpdateOneRequiredWithoutAppointmentsNestedInput = {
    create?: XOR<patientCreateWithoutAppointmentsInput, patientUncheckedCreateWithoutAppointmentsInput>
    connectOrCreate?: patientCreateOrConnectWithoutAppointmentsInput
    upsert?: patientUpsertWithoutAppointmentsInput
    connect?: patientWhereUniqueInput
    update?: XOR<XOR<patientUpdateToOneWithWhereWithoutAppointmentsInput, patientUpdateWithoutAppointmentsInput>, patientUncheckedUpdateWithoutAppointmentsInput>
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

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type prescriptionCreateWithoutPatientInput = {
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type prescriptionUncheckedCreateWithoutPatientInput = {
    id?: number
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type prescriptionCreateOrConnectWithoutPatientInput = {
    where: prescriptionWhereUniqueInput
    create: XOR<prescriptionCreateWithoutPatientInput, prescriptionUncheckedCreateWithoutPatientInput>
  }

  export type prescriptionCreateManyPatientInputEnvelope = {
    data: prescriptionCreateManyPatientInput | prescriptionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type appointmentCreateWithoutPatientInput = {
    date: Date | string
    time: string
    reason: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type appointmentUncheckedCreateWithoutPatientInput = {
    id?: number
    date: Date | string
    time: string
    reason: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type appointmentCreateOrConnectWithoutPatientInput = {
    where: appointmentWhereUniqueInput
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
  }

  export type appointmentCreateManyPatientInputEnvelope = {
    data: appointmentCreateManyPatientInput | appointmentCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type prescriptionUpsertWithWhereUniqueWithoutPatientInput = {
    where: prescriptionWhereUniqueInput
    update: XOR<prescriptionUpdateWithoutPatientInput, prescriptionUncheckedUpdateWithoutPatientInput>
    create: XOR<prescriptionCreateWithoutPatientInput, prescriptionUncheckedCreateWithoutPatientInput>
  }

  export type prescriptionUpdateWithWhereUniqueWithoutPatientInput = {
    where: prescriptionWhereUniqueInput
    data: XOR<prescriptionUpdateWithoutPatientInput, prescriptionUncheckedUpdateWithoutPatientInput>
  }

  export type prescriptionUpdateManyWithWhereWithoutPatientInput = {
    where: prescriptionScalarWhereInput
    data: XOR<prescriptionUpdateManyMutationInput, prescriptionUncheckedUpdateManyWithoutPatientInput>
  }

  export type prescriptionScalarWhereInput = {
    AND?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[]
    OR?: prescriptionScalarWhereInput[]
    NOT?: prescriptionScalarWhereInput | prescriptionScalarWhereInput[]
    id?: IntFilter<"prescription"> | number
    patientId?: IntFilter<"prescription"> | number
    medicationName?: StringFilter<"prescription"> | string
    dosage?: StringFilter<"prescription"> | string
    instructions?: StringFilter<"prescription"> | string
    datePrescribed?: DateTimeFilter<"prescription"> | Date | string
    createdAt?: DateTimeFilter<"prescription"> | Date | string
    updatedAt?: DateTimeFilter<"prescription"> | Date | string
  }

  export type appointmentUpsertWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput
    update: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>
    create: XOR<appointmentCreateWithoutPatientInput, appointmentUncheckedCreateWithoutPatientInput>
  }

  export type appointmentUpdateWithWhereUniqueWithoutPatientInput = {
    where: appointmentWhereUniqueInput
    data: XOR<appointmentUpdateWithoutPatientInput, appointmentUncheckedUpdateWithoutPatientInput>
  }

  export type appointmentUpdateManyWithWhereWithoutPatientInput = {
    where: appointmentScalarWhereInput
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutPatientInput>
  }

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
    OR?: appointmentScalarWhereInput[]
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[]
    id?: IntFilter<"appointment"> | number
    patientId?: IntFilter<"appointment"> | number
    date?: DateTimeFilter<"appointment"> | Date | string
    time?: StringFilter<"appointment"> | string
    reason?: StringFilter<"appointment"> | string
    status?: StringFilter<"appointment"> | string
    createdAt?: DateTimeFilter<"appointment"> | Date | string
    updatedAt?: DateTimeFilter<"appointment"> | Date | string
  }

  export type patientCreateWithoutPrescriptionsInput = {
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutPrescriptionsInput = {
    id?: number
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointments?: appointmentUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutPrescriptionsInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutPrescriptionsInput, patientUncheckedCreateWithoutPrescriptionsInput>
  }

  export type patientUpsertWithoutPrescriptionsInput = {
    update: XOR<patientUpdateWithoutPrescriptionsInput, patientUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<patientCreateWithoutPrescriptionsInput, patientUncheckedCreateWithoutPrescriptionsInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutPrescriptionsInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutPrescriptionsInput, patientUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type patientUpdateWithoutPrescriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutPrescriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointments?: appointmentUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type patientCreateWithoutAppointmentsInput = {
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: prescriptionCreateNestedManyWithoutPatientInput
  }

  export type patientUncheckedCreateWithoutAppointmentsInput = {
    id?: number
    name: string
    age: number
    phone: string
    sex: string
    occu: string
    medicalHistory?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prescriptions?: prescriptionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type patientCreateOrConnectWithoutAppointmentsInput = {
    where: patientWhereUniqueInput
    create: XOR<patientCreateWithoutAppointmentsInput, patientUncheckedCreateWithoutAppointmentsInput>
  }

  export type patientUpsertWithoutAppointmentsInput = {
    update: XOR<patientUpdateWithoutAppointmentsInput, patientUncheckedUpdateWithoutAppointmentsInput>
    create: XOR<patientCreateWithoutAppointmentsInput, patientUncheckedCreateWithoutAppointmentsInput>
    where?: patientWhereInput
  }

  export type patientUpdateToOneWithWhereWithoutAppointmentsInput = {
    where?: patientWhereInput
    data: XOR<patientUpdateWithoutAppointmentsInput, patientUncheckedUpdateWithoutAppointmentsInput>
  }

  export type patientUpdateWithoutAppointmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: prescriptionUpdateManyWithoutPatientNestedInput
  }

  export type patientUncheckedUpdateWithoutAppointmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    occu?: StringFieldUpdateOperationsInput | string
    medicalHistory?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prescriptions?: prescriptionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type prescriptionCreateManyPatientInput = {
    id?: number
    medicationName: string
    dosage: string
    instructions: string
    datePrescribed: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type appointmentCreateManyPatientInput = {
    id?: number
    date: Date | string
    time: string
    reason: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type prescriptionUpdateWithoutPatientInput = {
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type prescriptionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    medicationName?: StringFieldUpdateOperationsInput | string
    dosage?: StringFieldUpdateOperationsInput | string
    instructions?: StringFieldUpdateOperationsInput | string
    datePrescribed?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentUpdateWithoutPatientInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type appointmentUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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