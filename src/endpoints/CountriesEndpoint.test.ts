import {CountriesEndpoint} from "./CountriesEndpoint";
import {ArrayEndpoint} from "./ArrayEndpoint";

describe('CountriesEndpoint', () => {

    const countriesEndpoint = new CountriesEndpoint();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it('should countriesEndpoint', () => {
        expect(countriesEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of countriesEndpoint', () => {
        const returnedValue = CountriesEndpoint.getInstance();
        expect(returnedValue).toBeInstanceOf(CountriesEndpoint);
    });

});
