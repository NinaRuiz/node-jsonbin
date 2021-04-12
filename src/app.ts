import env from "dotenv";
import express from "express";
import log4js from "log4js";
import "reflect-metadata";
import Container from "typedi";
import {ArrayEndpoint} from "./endpoints/ArrayEndpoint";
import { CountriesEndpoint } from "./endpoints/CountriesEndpoint";
import {StringEndpoint} from "./endpoints/StringEndpoint";

const logger = log4js.getLogger("server.js");
logger.level = "all";

class App {

    public app: express.Application = express();

    constructor() {

        env.config();

        this.app.use(express.json());

        this.app.use("/countries", Container.get(CountriesEndpoint).countriesRouter);
        this.app.use("/append", Container.get(ArrayEndpoint).arrayRouter);
        this.app.use("/reverse", Container.get(StringEndpoint).stringRouter);

    }
}

new App().app.listen(parseInt(process.env.PORT, 0) || 8080, process.env.HOSTNAME, () => {
    return logger.info("server is listening on port: " + process.env.PORT || 8080);
});
