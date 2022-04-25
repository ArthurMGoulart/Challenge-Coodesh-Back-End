import { Article, ArticleSchema } from '../interfaces/ArticleInterface';
import Service, { ServiceError } from './Service';
import ArticleModel from '../models/Article';

class ArticleService extends Service<Article> {
  constructor(model = new ArticleModel()) {
    super(model);
  }

  create = async (obj: Article): Promise<Article | ServiceError | null> => {
    const parsedArticle = ArticleSchema.safeParse(obj);
    if (!parsedArticle.success) {
      return { error: parsedArticle.error };
    }
    return this.model.create(obj);
  };

  readOne = async (id: string): Promise<Article | ServiceError | null> => {
    const articleFound = this.model.readOne(id);
    return articleFound;
  };

  update = async (id: string, obj: Article): Promise<Article | ServiceError | null> => {
    const parsedArticle = ArticleSchema.safeParse(obj);
    if (!parsedArticle.success) {
      return { error: parsedArticle.error };
    }
    return this.model.update(id, obj);
  };

  delete = async (id: string): Promise<Article | ServiceError | null> => {
    return this.model.delete(id);
  };
}

export default ArticleService;
