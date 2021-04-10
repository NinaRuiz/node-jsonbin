import express from 'express';
import {CountriesController} from "./../controllers/CountriesController";

export class CountriesEndpoint {

    private static countriesEndpoint: CountriesEndpoint;

    public countriesRouter = express.Router();
    private countriesController;

    constructor() {
        this.countriesController = CountriesController.getInstance();

        this.countriesRouter.get('/', (req: any, res: any) => {
            this.countriesController.getCountries(req, res);
        });
    }

    public static getInstance(): CountriesEndpoint {
        if (!CountriesEndpoint.countriesEndpoint) {
            CountriesEndpoint.countriesEndpoint = new CountriesEndpoint();
        }
        return CountriesEndpoint.countriesEndpoint;
    }

}

