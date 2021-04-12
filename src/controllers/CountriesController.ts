import express, {Router} from 'express';
import { Service } from 'typedi';
import {CountriesService} from "./../services/CountriesService";
import log4js from "log4js";
import {ControllersBase} from "./../controllers/ControllersBase";
const logger = log4js.getLogger("server.js");

@Service()
export class CountriesController implements ControllersBase{

    private countriesRouter = express.Router();

    constructor(private countriesService: CountriesService) {
        this.initRoutes();
    }

    getRouter(): Router {
        return this.countriesRouter;
    }

    initRoutes(): void {
        this.countriesRouter.get('/', (req: any, res: any) => this.getAllCountries(req, res));
    }

    getAllCountries(req: any, res: any): void {
        logger.info('CountriesController -> Request received with params: ' + JSON.stringify(req.query))
        this.countriesService.getAll(req, res);
    }

}
