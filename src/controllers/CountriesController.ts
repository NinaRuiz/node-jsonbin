import { Service } from "typedi";
import {CountriesService} from "./../services/CountriesService";
import log4js from "log4js";
const logger = log4js.getLogger("server.js");

@Service()
export class CountriesController {

    constructor(public countriesService: CountriesService) {
    }

    public getCountries(req: any, res: any) {
        logger.info('CountriesController -> Request received with params: ' + JSON.stringify(req.query))
        this.countriesService.getAll(req, res)
    }

}
