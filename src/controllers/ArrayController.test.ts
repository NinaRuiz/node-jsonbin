import { ArrayService } from './../services/ArrayService';
import {ExpressMocks} from "../mocks/ExpressMocks";
import {ArrayController} from "./ArrayController";
import Container from "typedi";

require('reflect-metadata');

describe('ArrayController', () => {
    const expressMocks = ExpressMocks.getInstance();
    let arrayController: ArrayController;

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
        arrayController = Container.get(ArrayController);
        arrayController.arrayService = Container.get(ArrayService);
    });

    it('should arrayController', () => {
        expect(arrayController).toBeTruthy();
    });

    it('should appendStartOrAndEnd to have been called', () => {
        const req = expressMocks.mockRequest('');
        const res = expressMocks.mockResponse();
        spyOn(arrayController.arrayService, 'appendStartOrAndEnd').and.callThrough();
        arrayController.appendStartOrAndEnd(req, res);
        expect(arrayController.arrayService.appendStartOrAndEnd).toBeCalled();
    });

    it ('should getInstance return an instance of arrayController', () => {
        const returnedValue = Container.get(ArrayController);
        expect(returnedValue).toBeInstanceOf(ArrayController);
    });

});

