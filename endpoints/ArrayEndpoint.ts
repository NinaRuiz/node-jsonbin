import express from "express";
import {ArrayController} from "~/controllers/ArrayController";

export class ArrayEndpoint {

    private static arrayEndpoint: ArrayEndpoint;

    public arrayRouter = express.Router();
    arrayController: ArrayController;

    constructor() {
        this.arrayController = ArrayController.getInstance();

        this.arrayRouter.post('', (req: any, res: any) => {
            this.arrayController.appendStartOrAndEnd(req, res);
        });
    }

    public static getInstance(): ArrayEndpoint {
        if(!ArrayEndpoint.arrayEndpoint) {
            ArrayEndpoint.arrayEndpoint = new ArrayEndpoint();
        }
        return ArrayEndpoint.arrayEndpoint;
    }
}
