import { Service } from "typedi";
import {CountriesService} from "./../services/CountriesService";

@Service()
export class CountriesController {

    constructor(public countriesService: CountriesService) {
    }

    public getCountries(req: any, res: any) {
        this.countriesService.getAll(req, res)
    }

}
