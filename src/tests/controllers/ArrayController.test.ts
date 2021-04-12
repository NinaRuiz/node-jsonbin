import Container from "typedi";
import {ArrayController} from "../../controllers/ArrayController";

require('reflect-metadata');

describe('ArrayEndpoint', () => {

    let arrayEndpoint: ArrayController;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        arrayEndpoint = Container.get(ArrayController);
    })

    it('should arrayEndpoint', () => {
        expect(arrayEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of arrayEndpoint', () => {
        const returnedValue = Container.get(ArrayController);
        expect(returnedValue).toBeInstanceOf(ArrayController);
    });

});
