import { CountriesService } from './../services/CountriesService';
import { Container } from 'typedi';
import {ExpressMocks} from "../mocks/ExpressMocks";
import {CountriesController} from "./CountriesController";

require('reflect-metadata');

describe('CountriesController', () => {
    const expressMocks = ExpressMocks.getInstance();
    let countriesController: CountriesController;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        countriesController = Container.get(CountriesController);
        countriesController.countriesService = Container.get(CountriesService);
    })

    it('should countriesController', () => {
        expect(countriesController).toBeTruthy();
    });

    it('should getCountries to have been called', () => {
        const req = expressMocks.mockRequest('');
        const res = expressMocks.mockResponse();
        spyOn(countriesController.countriesService, 'getAll').and.callThrough();
        countriesController.getCountries(req, res);
        expect(countriesController.countriesService.getAll).toBeCalled();
    });

    it ('should getInstance return an instance of countriesController', () => {
        const returnedValue = Container.get(CountriesController);
        expect(returnedValue).toBeInstanceOf(CountriesController);
    });

});
