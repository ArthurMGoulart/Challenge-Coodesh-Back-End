import { Model as M } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';

abstract class MongoModel<T> implements Model<T> {
  constructor(protected model: M<T>) { }

  create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  read = async (page: number): Promise<T[]> => this.model.find().skip(page * 5).limit(5);

  readById = async (id: number): Promise<T | null> => this.model.findOne({ id });

  readOne = async (id: string): Promise<T | null> =>
    this.model.findById(id);

  update = async (id: string, obj: T): Promise<T | null> =>
    this.model.findByIdAndUpdate(id, obj, { new: true });

  delete = async (id: string): Promise<T | null> =>
    this.model.findByIdAndDelete(id);
}

export default MongoModel;
