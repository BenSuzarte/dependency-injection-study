import express, { Router } from "express";
import { INameController } from "./name_controller";

export interface INameRouterControllers {
  name: INameController;
}

export interface INameRouter {
  router: Router;
  path: string;
  
  create: (path: string) => void;
}

export class NameRouter implements INameRouter {
  router: Router = express.Router();
  path: string = "/name"

  private readonly _controllers: INameRouterControllers;

  constructor ( controllers: INameRouterControllers )
  {
    this._controllers = controllers

    this.create(this.path);
  }

  create(path: string) { this.router.post(path, this._controllers.name.create) }
}