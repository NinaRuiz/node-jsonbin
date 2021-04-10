import {StringEndpoint} from "./StringEndpoint";
import {ArrayEndpoint} from "./ArrayEndpoint";

describe('CountriesEndpoint', () => {

    const stringEndpoint = new StringEndpoint();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it('should stringEndpoint', () => {
        expect(stringEndpoint).toBeTruthy();
    });

    it ('should getInstance return an instance of stringEndpoint', () => {
        const returnedValue = StringEndpoint.getInstance();
        expect(returnedValue).toBeInstanceOf(StringEndpoint);
    });

});
