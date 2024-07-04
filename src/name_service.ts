import { inject, injectable } from "tsyringe";
import { Name } from "./name_interface";
import { INameRepository } from "./name_repository";

export interface INameService {
  create(first: string, last: string): Promise<String | Error>;
}

@injectable()
export class NameService implements INameService {

  constructor( 

    @inject("NameRepository")
    private readonly _repository: INameRepository 

  ) {}

  async create(first: string, last: string): Promise<String | Error> {

    if (first || last === "") { return new Error("The name isn't completed") }

    const isName: boolean = await this._repository.exists(first, last);

    if (isName) { return new Error("This name already exists.") }

    const name: Name = await this._repository.create(first, last)

    return `${name.first} ${name.last}`
  }

}