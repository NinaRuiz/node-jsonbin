import express from 'express';
import env from 'dotenv';
import { CountriesEndpoint } from './endpoints/CountriesEndpoint';

class App {
    public app: express.Application = express();

    private countriesEndpoint;


    constructor() {

        this.countriesEndpoint = CountriesEndpoint.getInstance();


        env.config();

        this.app.use(express.json());

        this.app.use('/countries', this.countriesEndpoint.countriesRouter);

    }
}

new App().app.listen(8080, () => {
    return console.log('server is listening on port 8080')
});
