import {ExpressMocks} from "../mocks/ExpressMocks";
import {CountriesController} from "./CountriesController";
import {CountriesEndpoint} from "../endpoints/CountriesEndpoint";

describe('CountriesController', () => {
    const expressMocks = ExpressMocks.getInstance();
    const countriesController = new CountriesController();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it('should countriesController', () => {
        expect(countriesController).toBeTruthy();
    });

    it('should getCountries to have been called', () => {
        const req = expressMocks.mockRequest('');
        const res = expressMocks.mockResponse();
        spyOn(countriesController, 'getCountries').and.callThrough();
        countriesController.getCountries(req, res);
        expect(countriesController.getCountries).toBeCalled();
    });

    it ('should getInstance return an instance of countriesController', () => {
        const returnedValue = CountriesController.getInstance();
        expect(returnedValue).toBeInstanceOf(CountriesController);
    });

});
