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
      }
    ];
  }
];
export declare type SchemaTables = typeof tables;
export declare type InferredTypes = SchemaInference<SchemaTables>;
export declare type Items = InferredTypes["items"];
export declare type ItemsRecord = Items & XataRecord;
export declare type DatabaseSchema = {
  items: ItemsRecord;
};
declare const DatabaseClient: any;
export declare class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions);
}
export declare const getXataClient: () => XataClient;
export {};
