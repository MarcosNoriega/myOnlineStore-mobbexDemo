import DbConnection from './dbConnection.interface';
import Mongo from './mongoDB.connection';

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

