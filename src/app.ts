import env from "dotenv";
import express from "express";
import log4js from "log4js";
import "reflect-metadata";
import Container from "typedi";
import {ArrayController} from "./controllers/ArrayController";
import { CountriesController } from "./controllers/CountriesController";
import {StringController} from "./controllers/StringController";

const logger = log4js.getLogger("server.js");
logger.level = "all";

class App {

    public app: express.Application = express();

    constructor() {

        env.config();

        this.app.use(express.json());

        this.app.use("/countries", Container.get(CountriesController).getRouter());
        this.app.use("/append", Container.get(ArrayController).getRouter());
        this.app.use("/reverse", Container.get(StringController).getRouter());

    }
}

new App().app.listen(parseInt(process.env.PORT, 0) || 8080, process.env.HOSTNAME, () => {
    return logger.info("server is listening on port: " + process.env.PORT || 8080);
});
