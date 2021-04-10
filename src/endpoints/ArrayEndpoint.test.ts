import {ArrayEndpoint} from "./ArrayEndpoint";

describe('ArrayEndpoint', () => {

    const arrayEndpoint = new ArrayEndpoint();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it('should arrayEndpoint', () => {
        expect(arrayEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of arrayEndpoint', () => {
        const returnedValue = ArrayEndpoint.getInstance();
        expect(returnedValue).toBeInstanceOf(ArrayEndpoint);
    });

});
