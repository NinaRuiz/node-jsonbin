import {ExpressMocks} from "../mocks/ExpressMocks";
import {ArrayController} from "./ArrayController";

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

});
