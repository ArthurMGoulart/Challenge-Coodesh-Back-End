import { Request, Response } from 'express';
import Controller, { RequestWithBody, ResponseError } from './Controller';
import ArticleService from '../services/Article';
import { Article } from '../interfaces/ArticleInterface';
import { ServiceError } from '../services/Service';

class ArticleController extends Controller<Article> {
  private $route: string;

  public service: ArticleService;

  constructor(
    service = new ArticleService(),
    route = '/articles',
  ) {
    super(service);
    this.$route = route;
    this.service = service;
    this.create = this.create.bind(this);
    this.readOne = this.readOne.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  get route() { return this.$route; }

  async create(
    req: RequestWithBody<Article>,
    res: Response<Article | ResponseError>,
  ): Promise<typeof res> {
    const { body } = req;
    try {
      const article = await this.service.create(body);
      if (!article) return res.status(500).json({ error: 'Null Created' });
      if ('error' in article) {
        const { error } = article;
        return res.status(400).json({ error });
      }
      return res.status(201).json(article);
    } catch (err) {
      const { message } = err as Error;
      return res.status(500).json({ error: message });
    }
  }

  async readOne(
    req: Request,
    res: Response<Article | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    try {
      const article = await this.service.readOne(id);
      if (!article) return res.status(404).json({ error: 'Article not found' });
      if ('error' in article) {
        const { error } = article;
        return res.status(400).json({ error: error.issues[0].message });
      }
      return res.status(200).json(article);
    } catch (err) {
      const { message } = err as Error;
      return res.status(500).json({ error: message });
    }
  }

  async update(
    req: RequestWithBody<Article>,
    res: Response<Article | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    const { body } = req;
    try {
      const article = await this.service.update(id, body);
      if (!article) return res.status(404).json({ error: 'Article not found' });
      if ('error' in article) {
        const { error } = article;
        return res.status(400).json({ error: error.issues[0].message });
      }
      return res.status(200).json(article);
    } catch (err) {
      const { message } = err as Error;
      return res.status(500).json({ error: message });
    }
  }

  async delete(
    req: Request,
    res: Response<Article | ResponseError>,
  ): Promise<typeof res> {
    const { id } = req.params;
    try {
      const article = await this.service.delete(id) as Article;
      if ('error' in article) {
        const articleError = article as never;
        const { error } = articleError as ServiceError;
        return res.status(400).json({ error: error.issues[0].message });
      }
      return res.status(204).json(article);
    } catch (err) {
      const { message } = err as Error;
      return res.status(500).json({ error: message });
    }
  }
}

export default ArticleController;
