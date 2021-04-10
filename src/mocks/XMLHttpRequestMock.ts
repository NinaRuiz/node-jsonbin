
export class XMLHttpRequestMock {

    private static XMLHttpRequestMock: XMLHttpRequestMock;

    createMockXHR(responseJSON: any) {
        return {
            open: function () {
                this.onreadystatechange();
            },
            send: jest.fn(),
            readyState: 4,
            prototype: XMLHttpRequest,
            DONE: 4,
            responseText: JSON.stringify(responseJSON || {}),
            onreadystatechange() {
                return this.readyState;
            }
        };
    };

    public static getInstance() {
        if (!XMLHttpRequestMock.XMLHttpRequestMock) {
            XMLHttpRequestMock.XMLHttpRequestMock = new XMLHttpRequestMock();
        }
        return XMLHttpRequestMock.XMLHttpRequestMock;
    }
}
