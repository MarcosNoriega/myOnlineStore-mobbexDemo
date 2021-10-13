import { app } from './config/server';
import dotenv from 'dotenv';

dotenv.config();

app.listen(app.get('port'), function () {
    console.log('App on port ', app.get('port'));
});