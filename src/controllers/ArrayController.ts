import {ArrayService} from "~/src/services/ArrayService";

export class ArrayController {

    private static arrayController: ArrayController;

    arrayService: ArrayService;

    constructor() {
        this.arrayService = ArrayService.getInstance();
    }

    appendStartOrAndEnd(req: any, res: any) {
        this.arrayService.appendStartOrAndEnd(req,res);
    }

    public static getInstance(): ArrayController {
        if (!ArrayController.arrayController) {
            ArrayController.arrayController = new ArrayController();
        }
        return ArrayController.arrayController;
    }
}
