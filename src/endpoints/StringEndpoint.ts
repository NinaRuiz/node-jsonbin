import express from "express";
import { Service } from "typedi";
import { StringController } from "./../controllers/StringController";

@Service()
export class StringEndpoint {

    public stringRouter = express.Router();

    constructor(private stringController: StringController) {
        this.stringRouter.get('/:word', (req: any, res: any) => {
            this.stringController.returnReverseString(req, res);
        });
    }

}
