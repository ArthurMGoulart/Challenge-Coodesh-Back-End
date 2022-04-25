"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const zod_1 = require("zod");
const ArticleSchema = zod_1.z.object({
    id: zod_1.z.number({
        required_error: 'id is required',
        invalid_type_error: 'id must be a number',
    }),
    featured: zod_1.z.boolean({
        required_error: 'featured is required',
        invalid_type_error: 'featured must be a boolean',
    }).default(false),
    title: zod_1.z.string({
        required_error: 'title is required',
        invalid_type_error: 'title must be a string',
    }),
    url: zod_1.z.string({
        required_error: 'url is required',
        invalid_type_error: 'url must be a string',
    }),
    imageUrl: zod_1.z.string({
        required_error: 'imageUrl is required',
        invalid_type_error: 'imageUrl must be a string',
    }),
    newsSite: zod_1.z.string({
        required_error: 'newsSite is required',
        invalid_type_error: 'newsSite must be a string',
    }),
    summary: zod_1.z.string({
        required_error: 'summary is required',
        invalid_type_error: 'summary must be a string',
    }),
    publishedAt: zod_1.z.string({
        required_error: 'publishedAt is required',
        invalid_type_error: 'publishedAt must be a string',
    }),
    launches: zod_1.z.object({}).array(),
    events: zod_1.z.object({}).array(),
});
exports.ArticleSchema = ArticleSchema;
