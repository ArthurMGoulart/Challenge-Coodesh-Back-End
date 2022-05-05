import CustomRouter from './api/routes/CustomRouter';
import App from './app';

import ArticleController from './api/controllers/Article';

import { Article } from './api/interfaces/ArticleInterface';

const server = new App();

const articleController = new ArticleController();

const articleRouter = new CustomRouter<Article>();

articleRouter.addRoute(articleController);

server.addRouter(articleRouter.router);

export default server;
