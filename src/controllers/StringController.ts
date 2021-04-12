import { Service } from "typedi";
import { StringService } from "./../services/StringService";
import log4js from "log4js";
const logger = log4js.getLogger("server.js");

@Service()
export class StringController {

    constructor(public stringService: StringService) {
    }

    public returnReverseString(req: any, res: any) {
        logger.info('StringController -> Request received with: ' + req.params.word);
        this.stringService.reverseString(req, res);
    }
}
