export interface Config{
    databaseType:string;
    dbURL:string;
    dbName:string;
    user?:string;
    password?:string;
    schemas?:string; //TODO Change this to type schema or sth
}