import {CountriesService} from "~/src/services/CountriesService";

export class CountriesController {

    private static countriesController: CountriesController;
    countriesService: CountriesService


    constructor(
    ) {
        this.countriesService = CountriesService.getInstance();
    }

    public getCountries(req: any, res: any) {
        this.countriesService.getAll(req, res)
    }

    public static getInstance() {
        if (!CountriesController.countriesController) {
            CountriesController.countriesController = new CountriesController();
        }
        return CountriesController.countriesController;
    }

}
