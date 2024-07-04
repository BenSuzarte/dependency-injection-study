import { Name } from './name_interface'

export interface INameRepository {
  create(first: string, last: string): Promise<Name>;
  exists(first: string, last: string): Promise<boolean>;
}

export class NameRepository implements INameRepository {
  
  async create(first: string, last: string): Promise<Name> {
    const name: Name = { first, last }
    return name
  }

  async exists(first: string, last: string): Promise<boolean> {
    const name = `${first} ${last}`;
    if (name == "Elisa Sousa") { return true }  
    return false
  }

}