import CustomRouter from './routes/CustomRouter';
import App from './app';

import ArticleController from './controllers/Article';

import { Article } from './interfaces/ArticleInterface';

const server = new App();

const articleController = new ArticleController();

const articleRouter = new CustomRouter<Article>();

articleRouter.addRoute(articleController);

server.addRouter(articleRouter.router);

export default server;
