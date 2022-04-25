"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = __importDefault(require("./Controller"));
const Article_1 = __importDefault(require("../services/Article"));
class ArticleController extends Controller_1.default {
    constructor(service = new Article_1.default(), route = '/articles') {
        super(service);
        this.$route = route;
        this.service = service;
        this.create = this.create.bind(this);
        this.readOne = this.readOne.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }
    get route() { return this.$route; }
    async create(req, res) {
        try {
            const { body } = req;
            const article = await this.service.create(body);
            if (!article)
                return res.status(500).json({ error: 'Null Created' });
            if ('error' in article) {
                const { error } = article;
                return res.status(400).json({ error });
            }
            return res.status(201).json(article);
        }
        catch (err) {
            const { message } = err;
            return res.status(500).json({ error: message });
        }
    }
    async readOne(req, res) {
        const { id } = req.params;
        try {
            const article = await this.service.readOne(id);
            if (!article)
                return res.status(404).json({ error: 'Article not found' });
            if ('error' in article) {
                const { error } = article;
                return res.status(400).json({ error });
            }
            return res.status(200).json(article);
        }
        catch (err) {
            const { message } = err;
            return res.status(500).json({ error: message });
        }
    }
    async update(req, res) {
        const { id } = req.params;
        const { body } = req;
        try {
            const article = await this.service.update(id, body);
            if (!article)
                return res.status(404).json({ error: 'Article not found' });
            if ('error' in article) {
                const { error } = article;
                return res.status(400).json({ error });
            }
            return res.status(200).json(article);
        }
        catch (err) {
            const { message } = err;
            return res.status(500).json({ error: message });
        }
    }
    async delete(req, res) {
        const { id } = req.params;
        try {
            const article = await this.service.delete(id);
            if ('error' in article) {
                const articleError = article;
                const { error } = articleError;
                return res.status(400).json({ error });
            }
            return res.status(204).json(article);
        }
        catch (err) {
            const { message } = err;
            return res.status(500).json({ error: message });
        }
    }
}
exports.default = ArticleController;
