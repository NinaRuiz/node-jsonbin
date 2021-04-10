
export class ArrayService {

    private static arrayService: ArrayService;

    appendStartOrAndEnd(req: any, res: any) {
        if (process.env.SIMPLE_ARRAY) {
            const simpleArray: string[] = JSON.parse(process.env.SIMPLE_ARRAY);
            if (req.query.start) {
                simpleArray.unshift(req.query.start.toString());
            }
            if (req.query.end) {
                simpleArray.push(req.query.end.toString());
            }
            res.send({
                status: 'OK',
                data: simpleArray
            });
        } else {
            res.send({
                status: 'ERROR',
                data: 'There is not a simple array on the enviroment.'
            });
        }

    }

    public static getInstance() {
        if (!ArrayService.arrayService) {
            ArrayService.arrayService = new ArrayService();
        }
        return ArrayService.arrayService;
    }

}
