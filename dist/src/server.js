"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomRouter_1 = __importDefault(require("./routes/CustomRouter"));
const app_1 = __importDefault(require("./app"));
const Article_1 = __importDefault(require("./controllers/Article"));
const server = new app_1.default();
const articleController = new Article_1.default();
const articleRouter = new CustomRouter_1.default();
articleRouter.addRoute(articleController);
server.addRouter(articleRouter.router);
exports.default = server;
