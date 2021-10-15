import { Mongoose } from 'mongoose';
import DbConnection from './dbConnection.interface';

export default class Mongo implements DbConnection {
    async connect(url: string, port: string, dbName: string) {
        try {
            const mongoose = new Mongoose();
            await mongoose.connect(`${url}:${port}/${dbName}`);

            console.info('mongo database connected successfully');
        } catch (error) {
            console.error(error);
        }
    }
    
}
