import express from 'express';
import { Service } from 'typedi';
import {CountriesController} from "./../controllers/CountriesController";

@Service()
export class CountriesEndpoint {

    public countriesRouter = express.Router();

    constructor(private countriesController: CountriesController) {
        this.countriesRouter.get('/', (req: any, res: any) => {
            this.countriesController.getCountries(req, res);
        });
    }

}

