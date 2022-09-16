export enum DatabaseType {
    MONGODB = 'MongoDB',
}
export const supportedORM: Map<DatabaseType,string> = new Map([
    [DatabaseType.MONGODB, "Mongoose"]
])
export interface DBSchema{
    databaseType: DatabaseType
    databaseORM: string
}