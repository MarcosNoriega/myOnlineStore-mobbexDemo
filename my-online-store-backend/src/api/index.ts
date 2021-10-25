import dotenv from "dotenv";
dotenv.config();

import { app } from './server';

app.listen(app.get('port'), function () {
    console.log('App on port ', app.get('port'));
});