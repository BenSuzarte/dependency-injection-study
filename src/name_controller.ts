import { Request, Response } from "express";
import { NameService } from "./name_service";
import { container } from "tsyringe";

export interface INameController {
  create(req: Request, res: Response): Promise<Response>;
}

export class NameController implements INameController {

  async create(req: Request, res: Response): Promise<Response> 
  {
    const _service = container.resolve(NameService);

    const { first, last } = req.body;

    const name: String | Error = await _service.create(first, last);

    if (name instanceof Error) { return res.json({error: name.message}) }

    return res.json({name})
  }

}