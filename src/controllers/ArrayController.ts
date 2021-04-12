import { Service } from "typedi";
import {ArrayService} from "./../services/ArrayService";
import log4js from "log4js";
const logger = log4js.getLogger("server.js");

@Service()
export class ArrayController {

    constructor(public arrayService: ArrayService) {
    }

    public appendStartOrAndEnd(req: any, res: any) {
        logger.info('ArrayController -> Request received with params: ' + JSON.stringify(req.query));
        this.arrayService.appendStartOrAndEnd(req, res);
    }
}
