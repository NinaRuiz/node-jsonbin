import {ExpressMocks} from "../mocks/ExpressMocks";
import {CountriesController} from "./CountriesController";

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

});
