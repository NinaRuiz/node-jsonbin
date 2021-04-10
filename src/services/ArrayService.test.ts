import {ArrayService} from "./ArrayService";
import {ExpressMocks} from "../mocks/ExpressMocks";

describe('ArrayService', () => {

    const expressMocks = ExpressMocks.getInstance();
    const arrayService = new ArrayService();

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    })

    it('should arrayService', () => {
        expect(arrayService).toBeTruthy();
    });

    it('should appendStartOrAndEnd have been called', () => {
        const req = expressMocks.mockRequest('');
        const res = expressMocks.mockResponse();
        spyOn(arrayService, 'appendStartOrAndEnd').and.callThrough();
        arrayService.appendStartOrAndEnd(req, res);
        expect(arrayService.appendStartOrAndEnd).toBeCalled();
    });

    it('should appendStartOrAndEnd return hello at the beginning of the array', () => {
        const req = expressMocks.mockRequest({query: { start: "hello" }});
        const res = expressMocks.mockResponse();
        process.env.SIMPLE_ARRAY = '["test"]'
        arrayService.appendStartOrAndEnd(req, res);
        expect(res.send).toBeCalled();
        expect(res.send).toHaveBeenCalledWith({
            status: 'OK',
            data: [ "hello", "test"]
        });
    });

    it('should appendStartOrAndEnd return bye at the end of the array', () => {
        const req = expressMocks.mockRequest({query: { end: "bye" }});
        const res = expressMocks.mockResponse();
        process.env.SIMPLE_ARRAY = '["test"]'
        arrayService.appendStartOrAndEnd(req, res);
        expect(res.send).toBeCalled();
        expect(res.send).toHaveBeenCalledWith({
            status: 'OK',
            data: [ "test", "bye"]
        });
    });

    it('should appendStartOrAndEnd return hello at the beginning of the array and bye at the end', () => {
        const req = expressMocks.mockRequest({query: { end: "bye", start: "hello" }});
        const res = expressMocks.mockResponse();
        process.env.SIMPLE_ARRAY = '["test"]'
        arrayService.appendStartOrAndEnd(req, res);
        expect(res.send).toBeCalled();
        expect(res.send).toHaveBeenCalledWith({
            status: 'OK',
            data: [ "hello", "test", "bye"]
        });
    });

    it('should appendStartOrAndEnd return error message: there is not a simple array', () => {
        const req = expressMocks.mockRequest({query: { start: "hello" }});
        const res = expressMocks.mockResponse();
        process.env.SIMPLE_ARRAY = '';
        arrayService.appendStartOrAndEnd(req, res);
        expect(res.send).toBeCalled();
        expect(res.send).toHaveBeenCalledWith({
            status: 'ERROR',
            data: 'There is not a simple array on the enviroment.'
        });
    });

});
