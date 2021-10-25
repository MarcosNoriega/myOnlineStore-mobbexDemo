const mongoose = require('mongoose');
import DbConnection from '../../../../interfaces/dbConnection.interface';

export default class Mongo implements DbConnection {
    async connect(url: string, port: string, dbName: string) {
        try {
            await mongoose.connect(`${url}:${port}/${dbName}`);

            console.info('mongo database connected successfully');
        } catch (error) {
            console.error(error);
        }
    }
    
}
