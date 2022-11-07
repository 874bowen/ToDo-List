import {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";
declare const tables: readonly [
  {
    readonly name: "items";
    readonly columns: readonly [
      {
        readonly name: "label";
        readonly type: "string";
      },
      {
        readonly name: "is_done";
        readonly type: "bool";
      },
      {
        readonly name: "user";
        readonly type: "link";
        readonly link: {
          readonly table: "users";
        };
      }
    ];
  },
  {
    readonly name: "users";
    readonly columns: readonly [
      {
        readonly name: "username";
        readonly type: "string";
        readonly notNull: true;
        readonly defaultValue: "undefined";
      },
      {
        readonly name: "password";
        readonly type: "string";
        readonly notNull: true;
        readonly defaultValue: "undefined";
      }
    ];
  }
];
export declare type SchemaTables = typeof tables;
export declare type InferredTypes = SchemaInference<SchemaTables>;
export declare type Items = InferredTypes["items"];
export declare type ItemsRecord = Items & XataRecord;
export declare type Users = InferredTypes["users"];
export declare type UsersRecord = Users & XataRecord;
export declare type DatabaseSchema = {
  items: ItemsRecord;
  users: UsersRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
