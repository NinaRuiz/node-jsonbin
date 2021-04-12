import { Service } from "typedi";
import {ArrayService} from "./../services/ArrayService";

@Service()
export class ArrayController {

    constructor(public arrayService: ArrayService) {
    }

    public appendStartOrAndEnd(req: any, res: any) {
        this.arrayService.appendStartOrAndEnd(req, res);
    }
}
