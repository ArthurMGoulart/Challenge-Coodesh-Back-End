import { ZodError } from 'zod';
import { Model } from '../interfaces/ModelInterface';

export interface ServiceError { 
  error: ZodError | string;
}

abstract class Service<T> { 
  constructor(protected model: Model<T>) { }

  public async create(obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  public async read(page: number | undefined): Promise<T[]> {
    return this.model.read(page);
  }

  public async readById(id: number): Promise<T | null | ServiceError> {
    return this.model.readById(id);
  }

  public async readOne(id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }

  public async update(id: string, obj: T): 
  Promise<T | null | ServiceError | null> {
    return this.model.update(id, obj);
  }

  public async delete(id: string): Promise<T | null | ServiceError> {
    return this.model.delete(id);
  }
}

export default Service;
