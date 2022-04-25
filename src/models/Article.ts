import { Schema, model as createModel } from 'mongoose';
import { Article } from '../interfaces/ArticleInterface';
import MongoModel from './MongoModel';

export const ArticleSchema = new Schema<Article>(
  {
    id: { type: Number, required: true },
    featured: { type: Boolean, required: true },
    title: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    newsSite: { type: String, required: true },
    summary: { type: String, required: true },
    publishedAt: { type: String, required: true },
    launches: { type: [], required: true },
    events: { type: [], required: true },
  },
  { versionKey: false },
);

class ArticleModel extends MongoModel<Article> {
  constructor(model = createModel('Articles', ArticleSchema)) {
    super(model);
  }
}

export default ArticleModel;
