import { StringService } from './../services/StringService';
import { Container } from 'typedi';
import {ExpressMocks} from "../mocks/ExpressMocks";
import {StringController} from "./StringController";

require('reflect-metadata');

describe('CountriesController', () => {
    const expressMocks = ExpressMocks.getInstance();
    let stringController: StringController;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        stringController = Container.get(StringController);
        stringController.stringService = Container.get(StringService);
    })

    it('should stringController', () => {
        expect(stringController).toBeTruthy();
    });

    it('should returnReverseString to have been called', () => {
        const req = expressMocks.mockRequest({
            params: {
                word: 'Hello'
            }
        });
        const res = expressMocks.mockResponse();
        spyOn(stringController, 'returnReverseString').and.callThrough();
        stringController.returnReverseString(req, res);
        expect(stringController.returnReverseString).toBeCalled();
    });

    it ('should getInstance return an instance of StringController', () => {
        const returnedValue = Container.get(StringController);
        expect(returnedValue).toBeInstanceOf(StringController);
    });

});
