import express from "express";
import { Service } from "typedi";
import { ArrayController } from "./../controllers/ArrayController";

@Service()
export class ArrayEndpoint {

    public arrayRouter = express.Router();

    constructor(private arrayController: ArrayController) {
        this.arrayRouter.get('', (req: any, res: any) => {
            this.arrayController.appendStartOrAndEnd(req, res);
        });
    }
}
