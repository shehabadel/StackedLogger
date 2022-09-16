import { Schema as MongooseSchema } from "mongoose";
import { DatabaseType, DBSchema } from "./DBSchema";

export interface Config{
    databaseType:DatabaseType;
    dbURL:string;
    dbName:string;
    user?:string;
    password?:string;
    schema?:DBSchema; //TODO Change this to type schema or sth
}