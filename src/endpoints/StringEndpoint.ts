import express from "express";
import {StringController} from "~/src/controllers/StringController";

export class StringEndpoint {

    private static stringEndpoint: StringEndpoint;

    public stringRouter = express.Router();

    stringController: StringController

    constructor() {
        this.stringController = StringController.getInstance();

        this.stringRouter.get('/:word', (req: any, res: any) => {
            this.stringController.returnReverseString(req, res);
        });
    }

    public static getInstance(): StringEndpoint {
        if (!StringEndpoint.stringEndpoint) {
            StringEndpoint.stringEndpoint = new StringEndpoint();
        }
        return StringEndpoint.stringEndpoint;
    }


}
