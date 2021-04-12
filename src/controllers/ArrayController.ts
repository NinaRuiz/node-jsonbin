import express, {Router} from "express";
import { Service } from "typedi";
import log4js from "log4js";
import {ArrayService} from "./../services/ArrayService";
import {ControllersBase} from "./../controllers/ControllersBase";
const logger = log4js.getLogger("server.js");

@Service()
export class ArrayController implements ControllersBase{

    private arrayRouter = express.Router();

    constructor(private arrayService: ArrayService) {
        this.initRoutes();
    }

    getRouter(): Router {
        return this.arrayRouter;
    }

    initRoutes(): void {
        this.arrayRouter.get('', (req: any, res: any) => this.getAppendStartOrAndEnd(req, res))
    }

    getAppendStartOrAndEnd(req: any, res: any): void {
        logger.info('ArrayController -> Request received with params: ' + JSON.stringify(req.query));
        this.arrayService.appendStartOrAndEnd(req, res);
    }
}
