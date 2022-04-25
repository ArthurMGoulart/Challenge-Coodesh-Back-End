"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose_1 = require("mongoose");
const MongoModel_1 = __importDefault(require("./MongoModel"));
exports.ArticleSchema = new mongoose_1.Schema({
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
}, { versionKey: false });
class ArticleModel extends MongoModel_1.default {
    constructor(model = (0, mongoose_1.model)('Articles', exports.ArticleSchema)) {
        super(model);
    }
}
exports.default = ArticleModel;
