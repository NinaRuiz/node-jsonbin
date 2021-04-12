import Container from "typedi";
import {CountriesEndpoint} from "./CountriesEndpoint";

require('reflect-metadata');

describe('CountriesEndpoint', () => {

    let countriesEndpoint: CountriesEndpoint;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        countriesEndpoint = Container.get(CountriesEndpoint);
    })

    it('should countriesEndpoint', () => {
        expect(countriesEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of countriesEndpoint', () => {
        const returnedValue = Container.get(CountriesEndpoint);
        expect(returnedValue).toBeInstanceOf(CountriesEndpoint);
    });

});
