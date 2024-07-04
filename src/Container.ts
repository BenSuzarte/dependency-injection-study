import { container } from "tsyringe";
import { INameRepository, NameRepository } from "./name_repository";

container.registerSingleton<INameRepository>(
  "NameRepository",
  NameRepository
)