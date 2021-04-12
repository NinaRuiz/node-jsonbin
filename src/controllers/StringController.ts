import { Service } from "typedi";
import { StringService } from "./../services/StringService";

@Service()
export class StringController {

    constructor(public stringService: StringService) {
    }

    public returnReverseString(req: any, res: any) {
        this.stringService.reverseString(req, res);
    }
}
