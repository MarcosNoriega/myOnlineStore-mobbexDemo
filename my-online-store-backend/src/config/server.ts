import express from 'express';
import cors from 'cors';
import { router } from '../routes/routes';
import DBConnectionFactory from '../repositories/db/dbConnectionFactory';

const urlMongo = process.env.URL_MONGO || "";
const portMongo = process.env.PORT_MONGO  || "";
const dbName = process.env.DB_MONGO || ""; 

const mongo = DBConnectionFactory.get("Mongo");
mongo.connect(urlMongo, portMongo, dbName);

export const app = express();
app.set('port', process.env.process || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

