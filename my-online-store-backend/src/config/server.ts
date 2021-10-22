import express from 'express';
import cors from 'cors';
import { router } from '../routes/routes';
import Mongo from '../repositories/db/mongoDB.connection';
import DBConnectionFactory from '../repositories/db/dbConnectionFactory';

const urlDatabase = process.env.URL_DATABASE || "";
const portDatabase = process.env.PORT_DATABASE  || "";
const dbName = process.env.DB_NAME || ""; 
const database = process.env.DATABASE || "";

const databaseConnect = DBConnectionFactory.get(database);
(async () => {
    const db = await databaseConnect.connect(urlDatabase, portDatabase, dbName);  
})();

export const app = express();
app.set('port', process.env.process || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

