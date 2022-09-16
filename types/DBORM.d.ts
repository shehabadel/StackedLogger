import {Schema} from 'mongoose'
interface MongooseORM {
dbSchema: Schema
}
//It is going to be a union of several ORMs
export type DBORM = MongooseORM