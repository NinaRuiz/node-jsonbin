import any = jasmine.any;

export class ExpressMocks {

    private static expressMocks: ExpressMocks;

    mockResponse() {
        const res = {
            send: any,
        };
        res.send = jest.fn().mockReturnValue(res);
        return res;
    }

    mockRequest(data: any) {
        return data;
    }

    public static getInstance() {
        if (!ExpressMocks.expressMocks) {
            ExpressMocks.expressMocks = new ExpressMocks();
        }
        return ExpressMocks.expressMocks;
    }
}
