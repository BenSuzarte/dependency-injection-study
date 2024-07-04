import express, { Application } from "express";
import { AppRouter } from './Router';
import { Factory } from "./AppFactory";

export class App {
  private readonly app: Application = express();

  constructor()
  {
    this.middlewares();
    this.router();
  }

  middlewares() {
    this.app.use(express.json())
  }

  router() {
    const factory = new Factory().do();
    const router = new AppRouter(factory).router;
    this.app.use(router);
  }

  run() {
    this.app.listen(3000, () => console.log("Server is running..."))
  }
}