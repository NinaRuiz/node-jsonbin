import Container from "typedi";
import {CountriesController} from "../../controllers/CountriesController";

require('reflect-metadata');

describe('CountriesEndpoint', () => {

    let countriesEndpoint: CountriesController;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        countriesEndpoint = Container.get(CountriesController);
    })

    it('should countriesEndpoint', () => {
        expect(countriesEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of countriesEndpoint', () => {
        const returnedValue = Container.get(CountriesController);
        expect(returnedValue).toBeInstanceOf(CountriesController);
    });

});
