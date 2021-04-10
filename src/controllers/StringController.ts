import {StringService} from "./../services/StringService";

export class StringController {

    private static stringController: StringController;

    stringService: StringService

    constructor() {
        this.stringService = StringService.getInstance();
    }

    returnReverseString(req: any, res: any) {
        this.stringService.reverseString(req, res);
    }

    public static getInstance(): StringController {
        if (!StringController.stringController) {
            StringController.stringController = new StringController();
        }
        return StringController.stringController;
    }
}
