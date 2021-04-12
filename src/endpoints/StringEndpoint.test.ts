import { Container } from 'typedi';
import {StringEndpoint} from "./StringEndpoint";

require('reflect-metadata');

describe('CountriesEndpoint', () => {

    let stringEndpoint: StringEndpoint;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        stringEndpoint = Container.get(StringEndpoint);
    })

    it('should stringEndpoint', () => {
        expect(stringEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of stringEndpoint', () => {
        const returnedValue = Container.get(StringEndpoint);
        expect(returnedValue).toBeInstanceOf(StringEndpoint);
    });

});
