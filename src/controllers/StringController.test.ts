import {ExpressMocks} from "../mocks/ExpressMocks";
import {StringController} from "./StringController";

describe('CountriesController', () => {
    const expressMocks = ExpressMocks.getInstance();
    const stringController = new StringController();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
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

});
