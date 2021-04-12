import { Container } from 'typedi';
import {StringController} from "../../controllers/StringController";

require('reflect-metadata');

describe('CountriesEndpoint', () => {

    let stringEndpoint: StringController;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        stringEndpoint = Container.get(StringController);
    })

    it('should stringEndpoint', () => {
        expect(stringEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of stringEndpoint', () => {
        const returnedValue = Container.get(StringController);
        expect(returnedValue).toBeInstanceOf(StringController);
    });

});
