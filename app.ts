import express from 'express';
import env from 'dotenv';
import { CountriesEndpoint } from './endpoints/CountriesEndpoint';
import {ArrayEndpoint} from "~/endpoints/ArrayEndpoint";

class App {
    public app: express.Application = express();

    private countriesEndpoint;
    private arrayEndpoint;


    constructor() {

        this.countriesEndpoint = CountriesEndpoint.getInstance();
        this.arrayEndpoint = ArrayEndpoint.getInstance();


        env.config();

        this.app.use(express.json());

        this.app.use('/countries', this.countriesEndpoint.countriesRouter);
        this.app.use('/reverse', this.arrayEndpoint.arrayRouter);

    }
}

new App().app.listen(8080, () => {
    return console.log('server is listening on port 8080')
});
