import express, { Router } from "express";

import { INameRouter } from "./name_router";

export interface IAppRoutes {
  name: INameRouter
}

export class AppRouter {
  router: Router = express.Router();
  private readonly _routes: IAppRoutes;

  constructor( routes: IAppRoutes ) {
    this._routes = routes;
    this.initialize();
  }

  private initialize() {
    this.router.use(this._routes.name.router)
  }
}