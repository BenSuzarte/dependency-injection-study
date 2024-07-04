import { NameController } from "./name_controller";
import { NameRouter } from "./name_router";
import { IAppRoutes } from "./Router";

export class Factory {
  do(): IAppRoutes {

    const name = this.name();

    const routes = {
      name: name
    }

    return routes
  }

  private name(): NameRouter {

    const controller = new NameController();

    const controllers = { 
      name: controller
    }
    
    return new NameRouter(controllers);
  }
}