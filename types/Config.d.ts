import { Schema as MongooseSchema } from "mongoose";
import { DBORM } from "./DBORM";
import { DatabaseType } from "./DBSchema";

export interface Config{
    databaseType:DatabaseType;
    dbURL:string;
    dbName?:string;
    user?:string;
    password?:string;
    dbORM:DBORM; //TODO Change this to type schema or sth
}