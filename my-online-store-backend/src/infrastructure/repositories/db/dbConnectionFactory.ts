import DbConnection from '../../../interfaces/dbConnection.interface';
import Mongo from './Mongo/mongoDB.connection';

export default class DBConnectionFactory {
    public static get(db: string): DbConnection {
        switch (db) {
            case "Mongo":
                return new Mongo();
                break;
            default:
                return new Mongo();
                break;
        }
    }
}

