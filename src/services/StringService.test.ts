import {ExpressMocks} from "../mocks/ExpressMocks";
import {StringService} from "./StringService";

describe('StringService', () => {

    const expressMocks = ExpressMocks.getInstance();
    const stringService = new StringService();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    });

    it('should stringService', () => {
        expect(stringService).toBeTruthy();
    })

    it('should reverseString to have been called', () => {
        const req = expressMocks.mockRequest({
            params: {
                word: 'Test'
            }
        });
        const res = expressMocks.mockResponse();

        spyOn(stringService, 'reverseString').and.callThrough();
        stringService.reverseString(req, res);
        expect(stringService.reverseString).toBeCalled();
    });

    it('should reverseString return a string on reverse with vowels on uppercase', () => {
        const req = expressMocks.mockRequest({
            params: {
                word: 'Test'
            }
        });
        const res = expressMocks.mockResponse();

        stringService.reverseString(req, res);
        expect(res.send).toHaveBeenCalledWith({
            status: 'OK',
            data: 'tsET'
        });

    });
});
