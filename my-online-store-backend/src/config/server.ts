import express from 'express';
import cors from 'cors';

export const app = express();
app.set('port', process.env.process || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


