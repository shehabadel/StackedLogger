import morgan from 'morgan'
import { Config } from './types/Config'
import { DBTYPE_ERROR, DBURL_ERROR } from './utils/constants'
import { DatabaseType } from './types/DBSchema'
/**
 * @author Shehab Adel
 * @param {Config} config - represents the configuration needed to initiate the logger.  
 * @description TODO write a better description when you're awake
 */
const StackedLogger = (config:Config)=>{
try {

    if(!config.dbURL) throw new Error(DBURL_ERROR)
    if(!config.databaseType) throw new Error(DBTYPE_ERROR)

    //TODO Initiate the configuration variables
    //and schema if the database type is MongoDB
    if(config.databaseType === DatabaseType.MONGODB){}

} catch (error) {
    console.error(error)
}
}