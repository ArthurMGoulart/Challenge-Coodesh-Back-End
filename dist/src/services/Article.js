"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArticleInterface_1 = require("../interfaces/ArticleInterface");
const Service_1 = __importDefault(require("./Service"));
const Article_1 = __importDefault(require("../models/Article"));
class ArticleService extends Service_1.default {
    constructor(model = new Article_1.default()) {
        super(model);
        this.create = async (obj) => {
            const parsedArticle = ArticleInterface_1.ArticleSchema.safeParse(obj);
            if (!parsedArticle.success) {
                return { error: parsedArticle.error };
            }
            const articleFound = await this.model.readById(obj.id);
            if (articleFound) {
                return { error: 'Already in database' };
            }
            return this.model.create(obj);
        };
        this.readOne = async (id) => {
            const articleFound = this.model.readOne(id);
            return articleFound;
        };
        this.update = async (id, obj) => {
            const parsedArticle = ArticleInterface_1.ArticleSchema.safeParse(obj);
            if (!parsedArticle.success) {
                return { error: parsedArticle.error };
            }
            return this.model.update(id, obj);
        };
        this.delete = async (id) => {
            const articleDeleted = this.model.delete(id);
            return articleDeleted;
        };
    }
}
exports.default = ArticleService;
