import {ExpressMocks} from "../mocks/ExpressMocks";
import {ArrayController} from "./ArrayController";
import {CountriesEndpoint} from "../endpoints/CountriesEndpoint";

describe('ArrayController', () => {
    const expressMocks = ExpressMocks.getInstance();
    const arrayController = new ArrayController();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it('should arrayController', () => {
        expect(arrayController).toBeTruthy();
    });

    it('should appendStartOrAndEnd to have been called', () => {
        const req = expressMocks.mockRequest('');
        const res = expressMocks.mockResponse();
        spyOn(arrayController, 'appendStartOrAndEnd').and.callThrough();
        arrayController.appendStartOrAndEnd(req, res);
        expect(arrayController.appendStartOrAndEnd).toBeCalled();
    });

    it ('should getInstance return an instance of arrayController', () => {
        const returnedValue = ArrayController.getInstance();
        expect(returnedValue).toBeInstanceOf(ArrayController);
    });

});
