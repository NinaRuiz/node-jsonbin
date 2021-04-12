import express from "express";
import { Service } from "typedi";
import { StringService } from "./../services/StringService";
import log4js from "log4js";
import {ControllersBase} from "./../controllers/ControllersBase";
import {Router} from "express";
const logger = log4js.getLogger("server.js");

@Service()
export class StringController implements ControllersBase{

    private stringRouter = express.Router();

    constructor(private stringService: StringService) {
        this.initRoutes();
    }

    getRouter(): Router {
        return this.stringRouter;
    }

    initRoutes(): void {
        this.stringRouter.get('/:word', (req: any, res: any) => this.getReverseWord(req, res));
    }

    getReverseWord(req: any, res: any): void {
        logger.info('StringController -> Request received with: ' + req.params.word);
        this.stringService.reverseString(req, res);
    }

}
