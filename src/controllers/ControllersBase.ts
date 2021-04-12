import {Router} from "express";

export abstract class ControllersBase {

    abstract getRouter(): Router;

    abstract initRoutes(): void;

}
