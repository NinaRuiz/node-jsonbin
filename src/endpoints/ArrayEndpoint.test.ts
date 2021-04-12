import Container from "typedi";
import {ArrayEndpoint} from "./ArrayEndpoint";

require('reflect-metadata');

describe('ArrayEndpoint', () => {

    let arrayEndpoint: ArrayEndpoint;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        arrayEndpoint = Container.get(ArrayEndpoint);
    })

    it('should arrayEndpoint', () => {
        expect(arrayEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of arrayEndpoint', () => {
        const returnedValue = Container.get(ArrayEndpoint);
        expect(returnedValue).toBeInstanceOf(ArrayEndpoint);
    });

});
