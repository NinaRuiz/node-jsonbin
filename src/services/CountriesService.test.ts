import {ExpressMocks} from "../mocks/ExpressMocks";
import {CountriesService} from "./CountriesService";
import {XMLHttpRequestMock} from "../mocks/XMLHttpRequestMock";
import {ArrayEndpoint} from "../endpoints/ArrayEndpoint";

describe('CountriesService', () => {

    const expressMocks = ExpressMocks.getInstance();
    const xMLHttpRequestMock = XMLHttpRequestMock.getInstance();
    const countriesService = new CountriesService();

    const response = [{"country": "Austria", "code": "AT", "vat": 20}, {
        "country": "Belgium",
        "code": "BE",
        "vat": 21
    }, {"country": "Bulgaria", "code": "BG", "vat": 20}, {
        "country": "Croatia",
        "code": "HR",
        "vat": 25
    }, {"country": "Cyprus", "code": "CY", "vat": 19}, {
        "country": "Czech Republic",
        "code": "CZ",
        "vat": 21
    }, {"country": "Denmark", "code": "DK", "vat": 25}, {
        "country": "Estonia",
        "code": "EE",
        "vat": 20
    }, {"country": "Finland", "code": "FI", "vat": 24}, {
        "country": "France",
        "code": "FR",
        "vat": 20
    }, {"country": "Germany", "code": "DE", "vat": 19}, {
        "country": "Greece",
        "code": "EL",
        "vat": 24
    }, {"country": "Hungary", "code": "HU", "vat": 27}, {
        "country": "Ireland",
        "code": "IE",
        "vat": 23
    }, {"country": "Italy", "code": "IT", "vat": 22}, {
        "country": "Latvia",
        "code": "LV",
        "vat": 21
    }, {"country": "Lithuania", "code": "LT", "vat": 21}, {
        "country": "Luxembourg",
        "code": "LU",
        "vat": 17
    }, {"country": "Malta", "code": "MT", "vat": 18}, {
        "country": "Netherlands",
        "code": "NL",
        "vat": 21
    }, {"country": "Poland", "code": "PO", "vat": 23}, {
        "country": "Portugal",
        "code": "PT",
        "vat": 23
    }, {"country": "Romania", "code": "RO", "vat": 20}, {
        "country": "Slovakia",
        "code": "SK",
        "vat": 20
    }, {"country": "Slovenia", "code": "SI", "vat": 22}, {
        "country": "Spain",
        "code": "ES",
        "vat": 21
    }, {"country": "Sweden", "code": "SW", "vat": 25},
        {"country": "United Kingdom", "code": "GB", "vat": 20}];

    beforeAll(() => {
        process.env.NODE_ENV = 'test';
    });

    it('should countriesService', () => {
        expect(countriesService).toBeTruthy();
    });

    it('should getAll have been called', async () => {
        const req = expressMocks.mockRequest({
            query: {
                filter: '',
                order: ''
            }
        });
        const res = expressMocks.mockResponse();
        spyOn(countriesService, 'getAll').and.callThrough();
        //@ts-ignore
        countriesService.xmlhttprequest = xMLHttpRequestMock.createMockXHR(response);
        await countriesService.getAll(req, res);
        expect(countriesService.getAll).toBeCalled();
    });

    it('should getAll to return response', async () => {
        const req = expressMocks.mockRequest({
            query: {
                filter: '',
                order: ''
            }
        });
        const res = expressMocks.mockResponse();
        spyOn(res, 'send').and.callThrough();
        //@ts-ignore
        countriesService.xmlhttprequest = xMLHttpRequestMock.createMockXHR(response);
        await countriesService.getAll(req, res);
        expect(res.send).toBeCalledWith({
            status: 'OK',
            data: response
        });
    });

    it('should getAll to return response with filter and order asc', async () => {
        const req = expressMocks.mockRequest({
            query: {
                filter: 'and',
                order: 'asc'
            }
        });
        const res = expressMocks.mockResponse();
        spyOn(res, 'send').and.callThrough();
        //@ts-ignore
        countriesService.xmlhttprequest = xMLHttpRequestMock.createMockXHR(response);
        await countriesService.getAll(req, res);
        expect(res.send).toBeCalled();
    });

    test('to return response with filter and order desc', async () => {
        const req = expressMocks.mockRequest({
            query: {
                filter: 'and',
                order: 'desc'
            }
        });
        const res = expressMocks.mockResponse();
        spyOn(res, 'send').and.callThrough();
        //@ts-ignore
        countriesService.xmlhttprequest = xMLHttpRequestMock.createMockXHR(response);
        await countriesService.getAll(req, res);
        expect(res.send).toBeCalled();
    });

    it ('should getInstance return an instance of CountriesService', () => {
        const returnedValue = CountriesService.getInstance();
        expect(returnedValue).toBeInstanceOf(CountriesService);
    });
})
