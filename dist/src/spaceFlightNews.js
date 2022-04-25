"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getArticlesFromApi = async () => {
    const { data } = await (0, axios_1.default)('https://api.spaceflightnewsapi.net/v3/articles');
    const articles = data;
    articles.forEach(async (article) => {
        var _a;
        try {
            await axios_1.default.post('http://localhost:3001/articles', article);
        }
        catch (e) {
            const axiosError = e;
            console.log((_a = axiosError.response) === null || _a === void 0 ? void 0 : _a.data.error);
        }
    });
};
exports.default = getArticlesFromApi;
