import express from 'express';
import env from 'dotenv';
import { CountriesEndpoint } from './endpoints/CountriesEndpoint';
import {ArrayEndpoint} from "~/endpoints/ArrayEndpoint";
import {StringEndpoint} from "~/endpoints/StringEndpoint";

class App {
    public app: express.Application = express();

    private countriesEndpoint: CountriesEndpoint;
    private arrayEndpoint: ArrayEndpoint;
    private stringEndpoint: StringEndpoint;


    constructor() {

        this.countriesEndpoint = CountriesEndpoint.getInstance();
        this.arrayEndpoint = ArrayEndpoint.getInstance();
        this.stringEndpoint = StringEndpoint.getInstance();

        env.config();

        this.app.use(express.json());

        this.app.use('/countries', this.countriesEndpoint.countriesRouter);
        this.app.use('/reverse', this.arrayEndpoint.arrayRouter);
        this.app.use('/append', this.stringEndpoint.stringRouter);

    }
}

new App().app.listen(8080, () => {
    return console.log('server is listening on port 8080')
});
