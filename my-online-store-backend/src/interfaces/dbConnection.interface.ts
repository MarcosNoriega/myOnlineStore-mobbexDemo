import { connect } from "mongoose";

export default interface DbConnection {
    connect(url: string, port: string, dbName: string): void;
}